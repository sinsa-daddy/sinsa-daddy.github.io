self.addEventListener("install",()=>{self.skipWaiting()}),self.addEventListener("activate",()=>{self.clients.matchAll({type:"window"}).then(e=>{e.forEach(e=>{e.navigate(e.url)})})});