---
layout: post
title:  "SpringBoot로 새로 프로젝트를 시작할 때 발생하는 JRE System Library 중복 문제"
category: SpringBoot
---
# 문제 발견
![jre-system-library-duplication](/images/2016-06-28/jre-system-library-duplication.png)

약 두달 전 쯤 새로운 프로젝트를 SpringBoot로 진행하려는데 프로젝트들 만들기만 하면 JRE System Library가 중복되는 오류가 발생했다. JRE System Library를 삭제, 추가해보고 구글링을 해봐도 만족스러운 해결 방법이 없었다. 당시에는 같은 팀에 계셨던 K과장님[(K과장님 글)](http://java.ihoney.pe.kr/438)의 도움으로 해결했었다.

한달여 지난 후, 새로운 프로젝트를 진행하려는데 같은 상황이 발생했다. 그래서 지난번처럼 K과장님의 글 내용대로 설정해서 해결하려 했으나 이상하게도 중복문제가 해결되지 않았다. 프로젝트를 새로고침(f5)이 아닌 Gradle Refresh All(Gradle(STS) - Refresh All(ctrl+f5))로 새로고침하면 다시 중복문제가 발생하는 것이다.

Gradle Refresh All 하면 `cleanEclipse`, `eclipse task`가 실행되면서 classpath를 재설정하는데, 제대로 설정되지 않는 것 같았다.  

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

# 현상 파악
간단히 해결될 줄로 믿고 구글링으로 여러 방법을 찾아봤지만 쉽게 방법이 찾아지지 않았다.  
일단 현상 파악을 해보았다.

- 새로운 프로젝트 만들 때마다 발생한다.
- 새로운 Gradle Project를 Import하면 문제가 생기지 않는다.(Import할 때와 Create할 때의 옵션이 다른 듯)
- JRE System Library를 삭제, 추가해봐도 해결되지 않는다.

# 해결 시도

## 1. JRE System Library 삭제, 추가 방법
- Project를 우클릭해서 Context menu를 띄운 뒤, `Build Path` - `ConfigureBuild Path...`를 클릭한다.
![configure-build-path](/images/2016-06-28/configure-build-path.png)

- 중복된 두개의 JRE System Library를 삭제한다.
![jre-remove](/images/2016-06-28/jre-remove.png)  

- Add Library... 를 클릭하고 JRE System Library를 선택한 후 Next.
![add-jre-system-library](/images/2016-06-28/add-jre-system-library.png)  

- Workspace default JRE 선택 후, Finish 클릭
![default-jre](/images/2016-06-28/default-jre.png)

- 에러가 없어졌다?  
![maybe-clear](/images/2016-06-28/maybe-clear.png)  

- 그런데 다시 `Refresh All` 하면 다시 중복 발생.  
![jre-system-library-duplication](/images/2016-06-28/jre-system-library-duplication.png)

## 2. build.gradle 수정
![modify-build-gradle](/images/2016-06-28/modify-build-gradle.png)

- containers 추가하는것 주석처리하니까 중복문제는 해결됐다. 그런데..`build.gradle`을 수정하는 방법은 맞지 않는 것 같은 느낌.

## 3. STS(Eclipse)에서 Gradle 옵션 설정
Gradle Project를 Import할 때는 발생하지 않고 Create 할때만 발생하므로 STS에서 옵션을 살펴보자.

- Gradle(STS) Context menu 들어가보니 `Enable Dependency Management`가 있다. 클릭!
![gradle-context-menu](/images/2016-06-28/gradle-context-menu.png)
- 다시 `Refresh All` 해보자. 오?! 중복이 사라졌다.  
![gradle-defendency](/images/2016-06-28/gradle-defendency.png)
- Gradle 프로젝트를 Import하는 경우를 확인해보니 Default로 `Enable dependency management`가 체크되어 있다.
![gradle-project-import](/images/2016-06-28/gradle-project-import.png)


# 해결책
- Gradle의 Eclipse Plugin 설정이 원인.
- Gradle의 `Dependency Management`를 `Enable`로 설정해주면 해결된다.
- 프로젝트 Context Menu 열기(프로젝트 우클릭) - Gradle(STS) 로 마우스 이동
![gradle-context-menu](/images/2016-06-28/gradle-context-menu.png)
  - `Enable Dependency Management` 클릭
  - `Disable Dependency Management`로 뜬다면 이미 설정되어 있다는 것.
- Gradle(STS) -> `Refresh All` 클릭(Ctrl+F5)
- 중복되었던 JRE System Library가 하나만 남았으며 오류 표시가 사라졌다.
![gradle-defendency](/images/2016-06-28/gradle-defendency.png)

# 참고
- [허니몬(Honeymon)의 자바guru - K과장님이 내용을 정리해서 남긴 글](http://java.ihoney.pe.kr/438)
- [stackoverflow - Eclipse Spring Boot Build Path Contains Duplicate Entry](http://stackoverflow.com/questions/36507516/eclipse-spring-boot-build-path-contains-duplicate-entry)
- [Gradle userguide - Chapter 23. Dependency Management](https://docs.gradle.org/current/userguide/dependency_management.html)
- [Spring.io/docs - Gradle STS Support -- 2.9.0 -- Tutorial](http://docs.spring.io/sts/docs/2.9.0.old/reference/html/gradle/gradle-sts-tutorial.html)
- [stackoverflow - How do I refresh project dependencies using Buildship in Eclipse?](http://stackoverflow.com/questions/31092934/how-do-i-refresh-project-dependencies-using-buildship-in-eclipse)
