<h2 align="center"> Web Test Automation Framework </h2>

<h4 align="center">
	
[![CI](https://github.com/sadabnepal/WebdriverIOCucumberTSFramework/actions/workflows/main.yml/badge.svg)](https://github.com/sadabnepal/WebdriverIOCucumberTSFramework/actions/workflows/main.yml)

</h4>

### Requirements:
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Getting Started
Clone Repository
```bash
1. git clone https://github.com/sadabnepal/WebdriverIOCucumberTSFramework.git
2. Navigate to `WebdriverIOCucumberTSFramework`
```

Install the dependencies:
```bash
npm install
```

Run tests:
```bash
npm test (to run all tests)
npm run smoke (to run smoke suite)
npm run regression (to run regression suite)
```

Generate allure report:
```bash
npm run report
```

Emailable HTML Report:
```
<ROOT_PROJECT_FOLDER>/reports/html/index.html
```
### Key Features
	- Cucumber BDD framework
	- Page Object Design pattern
	- Allure, Spec and Cucumber HTML report
	- Automatic test trigger using Github action

### Folder Structure
```
├───src
|   ├───features 
|   ├───pages
|   ├───steps    
|   └───testdata
|           └───signup.json
├───Utils
|       ├───Utilities.ts
|       ├───AssertionUtils.ts
|       └───WaitUtils.ts
├───package.json
├───README.md
├───tsconfig.json
└───wdio.conf.ts
```
### Sample Report
![image](https://github.com/arbaaz100/webdriver-io-bdd/blob/master/.github/images/allureReport1.png)
![image](https://github.com/arbaaz100/webdriver-io-bdd/blob/master/.github/images/allureReport2.png)

