---
sidebar_position: 1
---

# Angular new tab

Angular new tab using angular router.

 ```ts
 goToRevisionPage() {
    let url = this.router.serializeUrl(this.router.createUrlTree(['/extension-form'], { queryParams: { id: this.doctypeId, did: this.docid, revision: 1 } })
    );
    window.open(url, '_blank')
  }
```