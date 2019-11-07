# React Native with Navigation and Web App support Example  
This is an example of a React Native app with React Js support. It was created from merging the output from 
`react-native init rnWebAppExample` and `create-react-app rnWebAppExample`. It's goals was to create one code base that 
runs with react-navigation-stack on Android, iOS and WebApp. At the time of creating this app this wasn't possible 
straight out the box. The main issue was react-navigation-stack wasn't built to support running under a reactjs Webapp. 
The babel configuration in the default CRA ( create-react-app ) doesn't expect to find JSX, Flow, ... in node modules. 
The approach here is to use `react-app-rewired` to override the webpack config that is embedded in `react-scripts`. 
