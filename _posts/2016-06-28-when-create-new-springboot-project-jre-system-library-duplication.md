---
layout: post
title:  "SpringBoot로 새로 프로젝트를 시작할 때 발생하는 JRE System Library 중복 문제"
---
## When Create New SpringBoot Project, JRE System Library Duplication.

## 상황
- 약 두달 전 쯤인가 SpringBoot 로 프로젝트 시작하려고 보니 프로젝트들 만들기만 하면 JRE System Library가 중복되어 오류가 발생하는 상황이 나타났다.  
![jre-system-library-duplication](/images/2016-06-28/jre-system-library-duplication.png)

- 해결하려고 JRE System Library를 삭제했다가 다시 추가하고 막 구글링하고 해봐도 잘 해결 안됐었는데..
- 당시 같은팀에 계셨던 K과장님과 어찌저찌 해결했던 것 같다.
- 그 후, [K과장님이 내용을 정리해서 남긴 글](http://java.ihoney.pe.kr/438)
- 또 새로운 프로젝트를 만들어서 개발하려는데 똑같은 상황이 발생해서 K과장님의 글로 해결하려고 했다.
- 헌데 글 내용대로 진행한 후, 프로젝트를 새로고침(f5)가 아닌 Gradle(STS) - Refresh All(ctrl+f5) 로 새로고침하면 다시 중복문제가 발생했다.
- Gradle Refresh All 하면 cleanEclipse, eclipse task가 실행되면서 classpath를 재설정하는데, 제대로 설정되지 않는 것 같다.

  ```
  [sts] -----------------------------------------------------
  [sts] Starting Gradle build for the following tasks:
  [sts]      :cleanEclipse
  [sts]      :eclipse
  [sts] -----------------------------------------------------
  :cleanEclipseClasspath UP-TO-DATE
  :cleanEclipseJdt UP-TO-DATE
  :cleanEclipseProject UP-TO-DATE
  :cleanEclipse UP-TO-DATE
  :eclipseClasspath
  :eclipseJdt
  :eclipseProject
  :eclipse

  BUILD SUCCESSFUL

  Total time: 0.981 secs
  [sts] -----------------------------------------------------
  [sts] Build finished succesfully!
  [sts] Time taken: 0 min, 1 sec
  [sts] -----------------------------------------------------
  ```

## 원인 파악 과정
- 원인 파악 과정(삽질)이 길다. 해결책만 보려면 아래로 건너뛰자.
- 새로운 프로젝트 만들 때마다 발생한다.
- import하면 문제가 생기지 않음. 엥(?)
- 구글링..구글...구글링.....
- 일단 다시 한번 확인. 라이브러리를 삭제하고 다시 add해보자.
- Project를 우클릭해서 context menu를 띄운 뒤, Build Path - ConfigureBuild Path... 클릭.
![configure-build-path](/images/2016-06-28/configure-build-path.png)

- 중복된 두개의 JRE System Library를 삭제한다.
![jre-remove](/images/2016-06-28/jre-remove.png)  

- Add Library... 를 클릭하고 JRE System Library를 선택한 후 Next.
![add-jre-system-library](/images/2016-06-28/add-jre-system-library.png)  

- Workspace default JRE 선택 후, Finish 클릭
![default-jre](/images/2016-06-28/default-jre.png)

- 에러가 없어졌다?  
![maybe-clear](/images/2016-06-28/maybe-clear.png)  

- 그런데 다시 Refresh All 하면 다시 중복 발생.  
![jre-system-library-duplication](/images/2016-06-28/jre-system-library-duplication.png)

- build.gradle 수정해볼까?
  ![modify-build-gradle](/images/2016-06-28/modify-build-gradle.png)
  - containers 추가하는것 주석처리하니까 중복문제는 해결됐다. 그런데 기본 설정을 바꾸고 싶지는 않다.
  - containers.remove 가 정상작동 하는가? remove가 안되나??
  - containers.clean 정상 작동하는가? clean이 안되나??  
- gradle에서 eclipse classpath의 뭔가가 정상적으로 적용되지 않는 것 같다.
  - defendency가 제대로 적용되지 않는 것 같은데?

  - Gradle(STS) context menu 들어가보니 Enable Dependency Management가 있다. 클릭!
  ![gradle-context-menu](/images/2016-06-28/gradle-context-menu.png)

  - 다시 Refresh All 해보자. 오?! 중복이 사라졌다.  
  ![gradle-defendency](/images/2016-06-28/gradle-defendency.png)

- 다른 Gradle 프로젝트를 import 할 때를 다시 살펴보니 enable dependency management가 체크되어 있구나.  
![gradle-project-import](/images/2016-06-28/gradle-project-import.png)

## 해결책 정리
- Gradle의 Eclipse Plugin 설정이 원인이다.
- Gradle의 Dependency Management를 Enable로 설정해주면 해결된다.
- 프로젝트 Context Menu 열기(프로젝트 우클릭) - Gradle(STS) 로 마우스 이동
![gradle-context-menu](/images/2016-06-28/gradle-context-menu.png)
- Enable Dependency Management 클릭
- Disable Dependency Management로 뜬다면 이미 사용중이라는 것임.
- Gradle(STS) -> Refresh All 클릭(Ctrl+F5)
- 중복되었던 JRE System Library가 하나만 남음
- 오류 표시 사라짐.  
![gradle-defendency](/images/2016-06-28/gradle-defendency.png)
- 해결!

## 참고
- [K과장님이 내용을 정리해서 남긴 글](http://java.ihoney.pe.kr/438)
- [Eclipse Spring Boot Build Path Contains Duplicate Entry](http://stackoverflow.com/questions/36507516/eclipse-spring-boot-build-path-contains-duplicate-entry)
- [Chapter 23. Dependency Management](https://docs.gradle.org/current/userguide/dependency_management.html)
- [Gradle STS Support -- 2.9.0 -- Tutorial](http://docs.spring.io/sts/docs/2.9.0.old/reference/html/gradle/gradle-sts-tutorial.html)
- [How do I refresh project dependencies using Buildship in Eclipse?](http://stackoverflow.com/questions/31092934/how-do-i-refresh-project-dependencies-using-buildship-in-eclipse)
