module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/stuttgart1/level/1': { 
        page: '/',
        query: {
          city: "stuttgart1",
          level: 1
        } 
      },
      '/stuttgart1/level/2': { 
        page: '/',
        query: {
          city: "stuttgart1",
          level: 2
        }  
      },
      '/webgl': { page: '/webgl' },
    }
  }
}
