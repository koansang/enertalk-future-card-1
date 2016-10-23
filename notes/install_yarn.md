# 새로운 package manager yarn 사용 방법

### Install yarn-cli globally
```sh
> npm install -g yarn
```

### Install dependencies
In your project root, run:
```sh
> yarn
```

### npm과 비교
2개 디렉토리에 clone한 뒤 npm install, yarn을 각각 실행해보면 속도 비교 가능합니다.

최초 설치: 매우 빠름  
재설치: 비교 불가  

### 소감
CI나 eb 배포 시 속도를 많이 절감 시킬 수 있을 것 같습니다.
아직은 [issue](https://github.com/yarnpkg/yarn/issues)가 많은 것으로 보이며, stable 단계가 되면 충분히 실 서비스에도 적용 가능하다고 생각합니다.


### References
- [yarn documentation](https://yarnpkg.com/)
