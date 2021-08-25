---
sidebar_position: 6
---

# HTML

## Measurment text input

```html
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="measurement" aria-label="measurement" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">cm</span>
  </div>
</div>
```

## Bootstrap center vertical

```html
<div class="row">
       <div class="col-6 align-self-center">
         <div class="card card-block">
           Center
          </div>
       </div>
       <div class="col-6">
          <div class="card card-inverse card-danger">
           Taller
           </div>
       </div>
    </div>
</div>
```

## Angular breadcrumb

```html
<ng-container *ngIf="this.navigationList.length > 0">
  <ng-container *ngFor="let breadcrumb of navigationList; let last = last">
    <div class="page-header" *ngIf="last && breadcrumb.breadcrumbs !== false">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="page-header-title">
              <ng-container
                *ngFor="let breadcrumb of navigationList; let last = last"
              >
                <h5 class="m-b-10" *ngIf="last">
                  {{ breadcrumb.title | translate }}
                </h5>
              </ng-container>
            </div>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a [routerLink]="['/']" *ngIf="type === 'theme2'"
                  ><i class="feather icon-home"></i
                ></a>
                <a [routerLink]="['/']" *ngIf="type === 'theme1'">Home</a>
              </li>
              <ng-container
                *ngFor="let breadcrumb of navigationList; let last = last"
              >
                <li
                  class="breadcrumb-item"
                  *ngIf="!last && breadcrumb.url !== false"
                >
                  <a href="javascript:">{{ breadcrumb.title | translate }}</a>
                </li>
                <li
                  class="breadcrumb-item"
                  *ngIf="last && breadcrumb.url !== false"
                >
                  <a href="javascript:">{{ breadcrumb.title | translate }}</a>
                </li>
                <li
                  class="breadcrumb-item"
                  *ngIf="last && breadcrumb.url === false"
                >
                  <a href="javascript:">{{ breadcrumb.title | translate }}</a>
                </li>
              </ng-container>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>

<ng-container *ngIf="this.navigationList.length == 0">
  <ng-container>
    <div class="page-header">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="page-header-title">
              <ng-container><h5 class="m-b-10"></h5></ng-container>
            </div>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a [routerLink]="['/']" *ngIf="type === 'theme2'"
                  ><i class="feather icon-home"></i
                ></a>
                <a [routerLink]="['/']" *ngIf="type === 'theme1'">Home</a>
              </li>
              <ng-container
                *ngFor="let breadcrumb of navigationList; let last = last"
              >
                <li class="breadcrumb-item"><a href="javascript:">XXXXX</a></li>
              </ng-container>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
```