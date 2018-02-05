// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyASBrYmpbSzKRH7tOymFjgMPv25Bek1JNU",
    authDomain: "midterm-exam-aeb4a.firebaseapp.com",
    databaseURL: "https://midterm-exam-aeb4a.firebaseio.com",
    projectId: "midterm-exam-aeb4a",
    storageBucket: "midterm-exam-aeb4a.appspot.com",
    messagingSenderId: "530623897913"
  }
};
