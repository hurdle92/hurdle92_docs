---
sidebar_position: 5
---

# Deploy

:::info

**ADOT ON Next.js** 프로젝트를 정적 배포합니다.

:::

## Next.js Static Exports

Next.js 정적 배포를 위해서는 `next.config.mjs`에서 설정을 추가해줘야 합니다.

```javascript
const nextConfig = {
  output: "export",
  assetPrefix: isLocal ? undefined : ".",

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
```

프로젝트의 루트 폴더에서 아래 명령어를 통해 프로젝트를 빌드할 수 있습니다.

```javascript
yarn build
```

정상적으로 빌드가 완료되면 `adot_on_renewal` 프로젝트의 `out` 폴더에 빌드 결과물이 생성됩니다.

<br/>

<div style={{width:'240px'}}>
![img](/img/static_build_result.png)
</div>

`out` 폴더의 결과물을 원하는 환경에서 정적배포하시면 됩니다.
