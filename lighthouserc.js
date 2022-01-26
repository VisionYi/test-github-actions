module.exports = {
  ci: {
    collect: {
      url: ['https://dev.health2sync.com'],
      // startServerCommand: 'npm run start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'non-composited-animations': 'warn',
        'color-contrast': 'warn',
        'unused-javascript': 'warn',
        'csp-xss': 'warn', // nuxt.js 實作尚未完成，目前只有 HTTP Header 可以設定，但 script tag 沒有設定方式，參考 issue： https://github.com/nuxt/nuxt.js/issues/6811
        'categories:performance': ['error', { 'minScore': 0.5 }] // 由於分數低於 50 以下，performance report 會變成紅色警告，基本上改善幅度一定有很大的空間，盡量別低於此分數。
      }
    }
  },
}
