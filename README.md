# MeliApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Generate new module

## Generate routing module

Run `ng g module modules/<module name> --routing=true`
Example: `ng g module modules/features/modules/users --routing=true`

## Generate component

*Smart Components:* also know sometimes as application-level components, container components or controller components
*Presentation Components:* also known sometimes as pure components or dumb components
Generate smart component

Run `ng g component modules/<module name>/pages/<component name> --module=<module name>`
Example: `ng g component modules/features/modules/users/pages/users-list --module=users`

## Generate presentation component

Run `ng g component modules/<module name>/components/<component name> --module=<module name>`
Example: `ng g component modules/features/modules/users/components/users-cards --module=users`

## Generate service

Run `ng g service modules/<module name>/services/<service name>`
Example: `ng g service modules/features/modules/auth/services/auth`

## Generate directive

Run `ng g directive modules/<module name>/directives/<directive name>`

## Generate store

Run `ng generate store <store_name> -m <path_to_module> --statePath <folder_reducers> --stateInterface <State Interface Name>`
Example: `ng generate store users -m modules/features/modules/users/users.module.ts --statePath modules/features/modules/users/reducers --stateInterface UsersState`

## Generate reducer

Run `ng generate reducer <reducer name> --group --creators`
Example: `ng generate reducer modules/features/modules/users/user-data --group --creators`

## Generate action

Run `ng generate action <action_name> --group --creators`
Example: `ng generate action modules/features/modules/users/users-api --group --creators`


How to solve 'Redirect has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header'?

https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related

