import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/devops-deploy-plugin-docs/",
  title: "DevOps Deploy Plugins",
  description: "Documentation for IBM DevOps Deploy Plugins",
  appearance: "dark",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/UrbanCode/devops-deploy-plugin-docs/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `plugin/7-zip` directory.
      '/plugin/7-zip/': [
        {
          text: '7 zip',
          items: [
            { text: 'Downloads', link: 'plugin/7-zip/downloads' },
            { text: 'Overview', link: 'plugin/7-zip/overview' },
            { text: 'README', link: 'plugin/7-zip/README' },
            { text: 'Steps', link: 'plugin/7-zip/steps' },
            { text: 'Usage', link: 'plugin/7-zip/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ASOC` directory.
      '/plugin/ASOC/': [
        {
          text: 'ASOC',
          items: [
            { text: 'Downloads', link: 'plugin/ASOC/downloads' },
            { text: 'Overview', link: 'plugin/ASOC/overview' },
            { text: 'README', link: 'plugin/ASOC/README' },
            { text: 'Steps', link: 'plugin/ASOC/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/AccuRevSourceConfig` directory.
      '/plugin/AccuRevSourceConfig/': [
        {
          text: 'AccuRevSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/AccuRevSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/AccuRevSourceConfig/overview' },
            { text: 'README', link: 'plugin/AccuRevSourceConfig/README' },
            { text: 'Steps and roles', link: 'plugin/AccuRevSourceConfig/steps and roles' },
            { text: 'Usage', link: 'plugin/AccuRevSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/AgentScript` directory.
      '/plugin/AgentScript/': [
        {
          text: 'AgentScript',
          items: [
            { text: 'Downloads', link: 'plugin/AgentScript/downloads' },
            { text: 'README', link: 'plugin/AgentScript/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/AmazonEC2` directory.
      '/plugin/AmazonEC2/': [
        {
          text: 'AmazonEC2',
          items: [
            { text: 'Downloads', link: 'plugin/AmazonEC2/downloads' },
            { text: 'Overview', link: 'plugin/AmazonEC2/overview' },
            { text: 'README', link: 'plugin/AmazonEC2/README' },
            { text: 'Steps', link: 'plugin/AmazonEC2/steps' },
            { text: 'Usage', link: 'plugin/AmazonEC2/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Ant` directory.
      '/plugin/Ant/': [
        {
          text: 'Ant',
          items: [
            { text: 'Downloads', link: 'plugin/Ant/downloads' },
            { text: 'Overview', link: 'plugin/Ant/overview' },
            { text: 'README', link: 'plugin/Ant/README' },
            { text: 'Steps', link: 'plugin/Ant/steps' },
            { text: 'Usage', link: 'plugin/Ant/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Apache` directory.
      '/plugin/Apache/': [
        {
          text: 'Apache',
          items: [
            { text: 'Downloads', link: 'plugin/Apache/downloads' },
            { text: 'Overview', link: 'plugin/Apache/overview' },
            { text: 'README', link: 'plugin/Apache/README' },
            { text: 'Steps', link: 'plugin/Apache/steps' },
            { text: 'Usage', link: 'plugin/Apache/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Artifactory` directory.
      '/plugin/Artifactory/': [
        {
          text: 'Artifactory',
          items: [
            { text: 'Downloads', link: 'plugin/Artifactory/downloads' },
            { text: 'Overview', link: 'plugin/Artifactory/overview' },
            { text: 'README', link: 'plugin/Artifactory/README' },
            { text: 'Steps', link: 'plugin/Artifactory/steps' },
            { text: 'Usage', link: 'plugin/Artifactory/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ArtifactorySourceConfig` directory.
      '/plugin/ArtifactorySourceConfig/': [
        {
          text: 'ArtifactorySourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/ArtifactorySourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/ArtifactorySourceConfig/overview' },
            { text: 'README', link: 'plugin/ArtifactorySourceConfig/README' },
            { text: 'Roles', link: 'plugin/ArtifactorySourceConfig/roles' },
            { text: 'Steps', link: 'plugin/ArtifactorySourceConfig/steps' },
            { text: 'Usage', link: 'plugin/ArtifactorySourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Autosys` directory.
      '/plugin/Autosys/': [
        {
          text: 'Autosys',
          items: [
            { text: 'Downloads', link: 'plugin/Autosys/downloads' },
            { text: 'README', link: 'plugin/Autosys/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/AzureDevopsSourceconfig` directory.
      '/plugin/AzureDevopsSourceconfig/': [
        {
          text: 'AzureDevopsSourceconfig',
          items: [
            { text: 'Downloads', link: 'plugin/AzureDevopsSourceconfig/downloads' },
            { text: 'Overview', link: 'plugin/AzureDevopsSourceconfig/overview' },
            { text: 'README', link: 'plugin/AzureDevopsSourceconfig/README' },
            { text: 'Steps', link: 'plugin/AzureDevopsSourceconfig/steps' },
            { text: 'Usage', link: 'plugin/AzureDevopsSourceconfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/BizTalk` directory.
      '/plugin/BizTalk/': [
        {
          text: 'BizTalk',
          items: [
            { text: 'Downloads', link: 'plugin/BizTalk/downloads' },
            { text: 'Overview', link: 'plugin/BizTalk/overview' },
            { text: 'README', link: 'plugin/BizTalk/README' },
            { text: 'Steps', link: 'plugin/BizTalk/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/CICS-CM` directory.
      '/plugin/CICS-CM/': [
        {
          text: 'CICS CM',
          items: [
            { text: 'Component_templates', link: 'plugin/CICS-CM/component_templates' },
            { text: 'Downloads', link: 'plugin/CICS-CM/downloads' },
            { text: 'Overview', link: 'plugin/CICS-CM/overview' },
            { text: 'README', link: 'plugin/CICS-CM/README' },
            { text: 'Steps', link: 'plugin/CICS-CM/steps' },
            { text: 'Usage', link: 'plugin/CICS-CM/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/CICS` directory.
      '/plugin/CICS/': [
        {
          text: 'CICS',
          items: [
            { text: 'Component_templates', link: 'plugin/CICS/component_templates' },
            { text: 'Downloads', link: 'plugin/CICS/downloads' },
            { text: 'Overview', link: 'plugin/CICS/overview' },
            { text: 'README', link: 'plugin/CICS/README' },
            { text: 'Steps', link: 'plugin/CICS/steps' },
            { text: 'Troubleshooting', link: 'plugin/CICS/troubleshooting' },
            { text: 'Usage', link: 'plugin/CICS/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Chef` directory.
      '/plugin/Chef/': [
        {
          text: 'Chef',
          items: [
            { text: 'Downloads', link: 'plugin/Chef/downloads' },
            { text: 'Overview', link: 'plugin/Chef/overview' },
            { text: 'README', link: 'plugin/Chef/README' },
            { text: 'Steps', link: 'plugin/Chef/steps' },
            { text: 'Usage', link: 'plugin/Chef/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ClearCaseSourceConfig` directory.
      '/plugin/ClearCaseSourceConfig/': [
        {
          text: 'ClearCaseSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/ClearCaseSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/ClearCaseSourceConfig/overview' },
            { text: 'README', link: 'plugin/ClearCaseSourceConfig/README' },
            { text: 'Steps and roles', link: 'plugin/ClearCaseSourceConfig/steps and roles' },
            { text: 'Usage', link: 'plugin/ClearCaseSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Cognos` directory.
      '/plugin/Cognos/': [
        {
          text: 'Cognos',
          items: [
            { text: 'Downloads', link: 'plugin/Cognos/downloads' },
            { text: 'Overview', link: 'plugin/Cognos/overview' },
            { text: 'README', link: 'plugin/Cognos/README' },
            { text: 'Steps', link: 'plugin/Cognos/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/DBUpgrader` directory.
      '/plugin/DBUpgrader/': [
        {
          text: 'DBUpgrader',
          items: [
            { text: 'Downloads', link: 'plugin/DBUpgrader/downloads' },
            { text: 'Overview', link: 'plugin/DBUpgrader/overview' },
            { text: 'README', link: 'plugin/DBUpgrader/README' },
            { text: 'Steps', link: 'plugin/DBUpgrader/steps' },
            { text: 'Usage', link: 'plugin/DBUpgrader/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/DeployTools` directory.
      '/plugin/DeployTools/': [
        {
          text: 'DeployTools',
          items: [
            { text: 'Downloads', link: 'plugin/DeployTools/downloads' },
            { text: 'Overview', link: 'plugin/DeployTools/overview' },
            { text: 'README', link: 'plugin/DeployTools/README' },
            { text: 'Steps', link: 'plugin/DeployTools/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/DimensionsSourceConfig` directory.
      '/plugin/DimensionsSourceConfig/': [
        {
          text: 'DimensionsSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/DimensionsSourceConfig/downloads' },
            { text: 'README', link: 'plugin/DimensionsSourceConfig/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/DockerSourceConfig` directory.
      '/plugin/DockerSourceConfig/': [
        {
          text: 'DockerSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/DockerSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/DockerSourceConfig/overview' },
            { text: 'README', link: 'plugin/DockerSourceConfig/README' },
            { text: 'Settings', link: 'plugin/DockerSourceConfig/settings' },
            { text: 'Usage', link: 'plugin/DockerSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/F5` directory.
      '/plugin/F5/': [
        {
          text: 'F5',
          items: [
            { text: 'Downloads', link: 'plugin/F5/downloads' },
            { text: 'Overview', link: 'plugin/F5/overview' },
            { text: 'README', link: 'plugin/F5/README' },
            { text: 'Steps', link: 'plugin/F5/steps' },
            { text: 'Troubleshooting', link: 'plugin/F5/troubleshooting' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/FileNet-CaseManager` directory.
      '/plugin/FileNet-CaseManager/': [
        {
          text: 'FileNet CaseManager',
          items: [
            { text: 'Downloads', link: 'plugin/FileNet-CaseManager/downloads' },
            { text: 'Overview', link: 'plugin/FileNet-CaseManager/overview' },
            { text: 'README', link: 'plugin/FileNet-CaseManager/README' },
            { text: 'Steps', link: 'plugin/FileNet-CaseManager/steps' },
            { text: 'Usage', link: 'plugin/FileNet-CaseManager/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/FileSystemSourceConfig` directory.
      '/plugin/FileSystemSourceConfig/': [
        {
          text: 'FileSystemSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/FileSystemSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/FileSystemSourceConfig/overview' },
            { text: 'README', link: 'plugin/FileSystemSourceConfig/README' },
            { text: 'Steps', link: 'plugin/FileSystemSourceConfig/steps' },
            { text: 'Usage', link: 'plugin/FileSystemSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/FileSystemVersionedSourceConfig` directory.
      '/plugin/FileSystemVersionedSourceConfig/': [
        {
          text: 'FileSystemVersionedSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/FileSystemVersionedSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/FileSystemVersionedSourceConfig/overview' },
            { text: 'README', link: 'plugin/FileSystemVersionedSourceConfig/README' },
            { text: 'Steps', link: 'plugin/FileSystemVersionedSourceConfig/steps' },
            { text: 'Usage', link: 'plugin/FileSystemVersionedSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/FileUtils` directory.
      '/plugin/FileUtils/': [
        {
          text: 'FileUtils',
          items: [
            { text: 'Downloads', link: 'plugin/FileUtils/downloads' },
            { text: 'Overview', link: 'plugin/FileUtils/overview' },
            { text: 'README', link: 'plugin/FileUtils/README' },
            { text: 'Steps', link: 'plugin/FileUtils/steps' },
            { text: 'Troubleshooting', link: 'plugin/FileUtils/troubleshooting' },
            { text: 'Usage', link: 'plugin/FileUtils/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/GitSourceConfig` directory.
      '/plugin/GitSourceConfig/': [
        {
          text: 'GitSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/GitSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/GitSourceConfig/overview' },
            { text: 'README', link: 'plugin/GitSourceConfig/README' },
            { text: 'Settings', link: 'plugin/GitSourceConfig/settings' },
            { text: 'Troubleshooting', link: 'plugin/GitSourceConfig/troubleshooting' },
            { text: 'Usage', link: 'plugin/GitSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Groovy` directory.
      '/plugin/Groovy/': [
        {
          text: 'Groovy',
          items: [
            { text: 'Downloads', link: 'plugin/Groovy/downloads' },
            { text: 'Overview', link: 'plugin/Groovy/overview' },
            { text: 'README', link: 'plugin/Groovy/README' },
            { text: 'Steps', link: 'plugin/Groovy/steps' },
            { text: 'Usage', link: 'plugin/Groovy/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLDevOpsTestHub` directory.
      '/plugin/HCLDevOpsTestHub/': [
        {
          text: 'HCLDevOpsTestHub',
          items: [
            { text: 'Downloads', link: 'plugin/HCLDevOpsTestHub/downloads' },
            { text: 'README', link: 'plugin/HCLDevOpsTestHub/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLDevOpsTestPerf` directory.
      '/plugin/HCLDevOpsTestPerf/': [
        {
          text: 'HCLDevOpsTestPerf',
          items: [
            { text: 'Downloads', link: 'plugin/HCLDevOpsTestPerf/downloads' },
            { text: 'README', link: 'plugin/HCLDevOpsTestPerf/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLDevOpsTestUI` directory.
      '/plugin/HCLDevOpsTestUI/': [
        {
          text: 'HCLDevOpsTestUI',
          items: [
            { text: 'Downloads', link: 'plugin/HCLDevOpsTestUI/downloads' },
            { text: 'README', link: 'plugin/HCLDevOpsTestUI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLDevOpsTestUIWebUI` directory.
      '/plugin/HCLDevOpsTestUIWebUI/': [
        {
          text: 'HCLDevOpsTestUIWebUI',
          items: [
            { text: 'Downloads', link: 'plugin/HCLDevOpsTestUIWebUI/downloads' },
            { text: 'README', link: 'plugin/HCLDevOpsTestUIWebUI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLDevOpsTestVirtualization` directory.
      '/plugin/HCLDevOpsTestVirtualization/': [
        {
          text: 'HCLDevOpsTestVirtualization',
          items: [
            { text: 'Downloads', link: 'plugin/HCLDevOpsTestVirtualization/downloads' },
            { text: 'README', link: 'plugin/HCLDevOpsTestVirtualization/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLOneTestAPI` directory.
      '/plugin/HCLOneTestAPI/': [
        {
          text: 'HCLOneTestAPI',
          items: [
            { text: 'Downloads', link: 'plugin/HCLOneTestAPI/downloads' },
            { text: 'README', link: 'plugin/HCLOneTestAPI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLOneTestPerf` directory.
      '/plugin/HCLOneTestPerf/': [
        {
          text: 'HCLOneTestPerf',
          items: [
            { text: 'Downloads', link: 'plugin/HCLOneTestPerf/downloads' },
            { text: 'README', link: 'plugin/HCLOneTestPerf/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLOneTestUI` directory.
      '/plugin/HCLOneTestUI/': [
        {
          text: 'HCLOneTestUI',
          items: [
            { text: 'Downloads', link: 'plugin/HCLOneTestUI/downloads' },
            { text: 'README', link: 'plugin/HCLOneTestUI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLOneTestVirtualization` directory.
      '/plugin/HCLOneTestVirtualization/': [
        {
          text: 'HCLOneTestVirtualization',
          items: [
            { text: 'Downloads', link: 'plugin/HCLOneTestVirtualization/downloads' },
            { text: 'README', link: 'plugin/HCLOneTestVirtualization/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HCLOneTestWebUI` directory.
      '/plugin/HCLOneTestWebUI/': [
        {
          text: 'HCLOneTestWebUI',
          items: [
            { text: 'Downloads', link: 'plugin/HCLOneTestWebUI/downloads' },
            { text: 'README', link: 'plugin/HCLOneTestWebUI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/HPQualityCenter` directory.
      '/plugin/HPQualityCenter/': [
        {
          text: 'HPQualityCenter',
          items: [
            { text: 'Downloads', link: 'plugin/HPQualityCenter/downloads' },
            { text: 'Overview', link: 'plugin/HPQualityCenter/overview' },
            { text: 'README', link: 'plugin/HPQualityCenter/README' },
            { text: 'Steps', link: 'plugin/HPQualityCenter/steps' },
            { text: 'Troubleshooting', link: 'plugin/HPQualityCenter/troubleshooting' },
            { text: 'Usage', link: 'plugin/HPQualityCenter/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IBMDevOpsTestHub` directory.
      '/plugin/IBMDevOpsTestHub/': [
        {
          text: 'IBMDevOpsTestHub',
          items: [
            { text: 'Downloads', link: 'plugin/IBMDevOpsTestHub/downloads' },
            { text: 'README', link: 'plugin/IBMDevOpsTestHub/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IBMDevOpsTestPerf` directory.
      '/plugin/IBMDevOpsTestPerf/': [
        {
          text: 'IBMDevOpsTestPerf',
          items: [
            { text: 'Downloads', link: 'plugin/IBMDevOpsTestPerf/downloads' },
            { text: 'README', link: 'plugin/IBMDevOpsTestPerf/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IBMDevOpsTestUI` directory.
      '/plugin/IBMDevOpsTestUI/': [
        {
          text: 'IBMDevOpsTestUI',
          items: [
            { text: 'Downloads', link: 'plugin/IBMDevOpsTestUI/downloads' },
            { text: 'README', link: 'plugin/IBMDevOpsTestUI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IBMDevOpsTestUIWebUI` directory.
      '/plugin/IBMDevOpsTestUIWebUI/': [
        {
          text: 'IBMDevOpsTestUIWebUI',
          items: [
            { text: 'Downloads', link: 'plugin/IBMDevOpsTestUIWebUI/downloads' },
            { text: 'README', link: 'plugin/IBMDevOpsTestUIWebUI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IBMDevOpsTestVirtualization` directory.
      '/plugin/IBMDevOpsTestVirtualization/': [
        {
          text: 'IBMDevOpsTestVirtualization',
          items: [
            { text: 'Downloads', link: 'plugin/IBMDevOpsTestVirtualization/downloads' },
            { text: 'README', link: 'plugin/IBMDevOpsTestVirtualization/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IIS-AdminScripts` directory.
      '/plugin/IIS-AdminScripts/': [
        {
          text: 'IIS AdminScripts',
          items: [
            { text: 'Downloads', link: 'plugin/IIS-AdminScripts/downloads' },
            { text: 'Overview', link: 'plugin/IIS-AdminScripts/overview' },
            { text: 'README', link: 'plugin/IIS-AdminScripts/README' },
            { text: 'Steps', link: 'plugin/IIS-AdminScripts/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IIS-AppCmd` directory.
      '/plugin/IIS-AppCmd/': [
        {
          text: 'IIS AppCmd',
          items: [
            { text: 'Downloads', link: 'plugin/IIS-AppCmd/downloads' },
            { text: 'Overview', link: 'plugin/IIS-AppCmd/overview' },
            { text: 'README', link: 'plugin/IIS-AppCmd/README' },
            { text: 'Steps', link: 'plugin/IIS-AppCmd/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IIS-MSDeploy` directory.
      '/plugin/IIS-MSDeploy/': [
        {
          text: 'IIS MSDeploy',
          items: [
            { text: 'Downloads', link: 'plugin/IIS-MSDeploy/downloads' },
            { text: 'Overview', link: 'plugin/IIS-MSDeploy/overview' },
            { text: 'README', link: 'plugin/IIS-MSDeploy/README' },
            { text: 'Steps', link: 'plugin/IIS-MSDeploy/steps' },
            { text: 'Usage', link: 'plugin/IIS-MSDeploy/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/IMSz` directory.
      '/plugin/IMSz/': [
        {
          text: 'IMSz',
          items: [
            { text: 'Downloads', link: 'plugin/IMSz/downloads' },
            { text: 'Overview', link: 'plugin/IMSz/overview' },
            { text: 'README', link: 'plugin/IMSz/README' },
            { text: 'Steps', link: 'plugin/IMSz/steps' },
            { text: 'Troubleshooting', link: 'plugin/IMSz/troubleshooting' },
            { text: 'Usage', link: 'plugin/IMSz/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Informatica` directory.
      '/plugin/Informatica/': [
        {
          text: 'Informatica',
          items: [
            { text: 'Overview', link: 'plugin/Informatica/overview' },
            { text: 'README', link: 'plugin/Informatica/README' },
            { text: 'Steps', link: 'plugin/Informatica/steps' },
            { text: 'Usage', link: 'plugin/Informatica/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/JBoss` directory.
      '/plugin/JBoss/': [
        {
          text: 'JBoss',
          items: [
            { text: 'Downloads', link: 'plugin/JBoss/downloads' },
            { text: 'Overview', link: 'plugin/JBoss/overview' },
            { text: 'README', link: 'plugin/JBoss/README' },
            { text: 'Steps', link: 'plugin/JBoss/steps' },
            { text: 'Usage', link: 'plugin/JBoss/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/JIRA` directory.
      '/plugin/JIRA/': [
        {
          text: 'JIRA',
          items: [
            { text: 'Downloads', link: 'plugin/JIRA/downloads' },
            { text: 'Overview', link: 'plugin/JIRA/overview' },
            { text: 'README', link: 'plugin/JIRA/README' },
            { text: 'Steps', link: 'plugin/JIRA/steps' },
            { text: 'Usage', link: 'plugin/JIRA/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/LinuxSystemTools` directory.
      '/plugin/LinuxSystemTools/': [
        {
          text: 'LinuxSystemTools',
          items: [
            { text: 'Downloads', link: 'plugin/LinuxSystemTools/downloads' },
            { text: 'Overview', link: 'plugin/LinuxSystemTools/overview' },
            { text: 'README', link: 'plugin/LinuxSystemTools/README' },
            { text: 'Steps', link: 'plugin/LinuxSystemTools/steps' },
            { text: 'Usage', link: 'plugin/LinuxSystemTools/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/MFPFC` directory.
      '/plugin/MFPFC/': [
        {
          text: 'MFPFC',
          items: [
            { text: 'Downloads', link: 'plugin/MFPFC/downloads' },
            { text: 'Overview', link: 'plugin/MFPFC/overview' },
            { text: 'README', link: 'plugin/MFPFC/README' },
            { text: 'Steps', link: 'plugin/MFPFC/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/MSI` directory.
      '/plugin/MSI/': [
        {
          text: 'MSI',
          items: [
            { text: 'Downloads', link: 'plugin/MSI/downloads' },
            { text: 'README', link: 'plugin/MSI/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Maven` directory.
      '/plugin/Maven/': [
        {
          text: 'Maven',
          items: [
            { text: 'Downloads', link: 'plugin/Maven/downloads' },
            { text: 'Overview', link: 'plugin/Maven/overview' },
            { text: 'README', link: 'plugin/Maven/README' },
            { text: 'Steps', link: 'plugin/Maven/steps' },
            { text: 'Usage', link: 'plugin/Maven/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/MavenSourceConfig` directory.
      '/plugin/MavenSourceConfig/': [
        {
          text: 'MavenSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/MavenSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/MavenSourceConfig/overview' },
            { text: 'README', link: 'plugin/MavenSourceConfig/README' },
            { text: 'Steps', link: 'plugin/MavenSourceConfig/steps' },
            { text: 'Usage', link: 'plugin/MavenSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/MicrosoftSSIS` directory.
      '/plugin/MicrosoftSSIS/': [
        {
          text: 'MicrosoftSSIS',
          items: [
            { text: 'Downloads', link: 'plugin/MicrosoftSSIS/downloads' },
            { text: 'Overview', link: 'plugin/MicrosoftSSIS/overview' },
            { text: 'README', link: 'plugin/MicrosoftSSIS/README' },
            { text: 'Steps', link: 'plugin/MicrosoftSSIS/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Netscaler` directory.
      '/plugin/Netscaler/': [
        {
          text: 'Netscaler',
          items: [
            { text: 'Downloads', link: 'plugin/Netscaler/downloads' },
            { text: 'README', link: 'plugin/Netscaler/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/OpenShiftSourceConfig` directory.
      '/plugin/OpenShiftSourceConfig/': [
        {
          text: 'OpenShiftSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/OpenShiftSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/OpenShiftSourceConfig/overview' },
            { text: 'README', link: 'plugin/OpenShiftSourceConfig/README' },
            { text: 'Settings', link: 'plugin/OpenShiftSourceConfig/settings' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/PHPCLI` directory.
      '/plugin/PHPCLI/': [
        {
          text: 'PHPCLI',
          items: [
            { text: 'Downloads', link: 'plugin/PHPCLI/downloads' },
            { text: 'Overview', link: 'plugin/PHPCLI/overview' },
            { text: 'README', link: 'plugin/PHPCLI/README' },
            { text: 'Setup', link: 'plugin/PHPCLI/setup' },
            { text: 'Steps', link: 'plugin/PHPCLI/steps' },
            { text: 'Usage', link: 'plugin/PHPCLI/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/PerforceSourceConfig` directory.
      '/plugin/PerforceSourceConfig/': [
        {
          text: 'PerforceSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/PerforceSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/PerforceSourceConfig/overview' },
            { text: 'README', link: 'plugin/PerforceSourceConfig/README' },
            { text: 'Settings', link: 'plugin/PerforceSourceConfig/settings' },
            { text: 'Usage', link: 'plugin/PerforceSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/PvcsSourceConfig` directory.
      '/plugin/PvcsSourceConfig/': [
        {
          text: 'PvcsSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/PvcsSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/PvcsSourceConfig/overview' },
            { text: 'README', link: 'plugin/PvcsSourceConfig/README' },
            { text: 'Settings', link: 'plugin/PvcsSourceConfig/settings' },
            { text: 'Usage', link: 'plugin/PvcsSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/QTP` directory.
      '/plugin/QTP/': [
        {
          text: 'QTP',
          items: [
            { text: 'Downloads', link: 'plugin/QTP/downloads' },
            { text: 'Overview', link: 'plugin/QTP/overview' },
            { text: 'README', link: 'plugin/QTP/README' },
            { text: 'Steps', link: 'plugin/QTP/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RAM` directory.
      '/plugin/RAM/': [
        {
          text: 'RAM',
          items: [
            { text: 'Downloads', link: 'plugin/RAM/downloads' },
            { text: 'Overview', link: 'plugin/RAM/overview' },
            { text: 'README', link: 'plugin/RAM/README' },
            { text: 'Steps', link: 'plugin/RAM/steps' },
            { text: 'Usage', link: 'plugin/RAM/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RAMSourceConfig` directory.
      '/plugin/RAMSourceConfig/': [
        {
          text: 'RAMSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/RAMSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/RAMSourceConfig/overview' },
            { text: 'README', link: 'plugin/RAMSourceConfig/README' },
            { text: 'Settings', link: 'plugin/RAMSourceConfig/settings' },
            { text: 'Usage', link: 'plugin/RAMSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RFT-UCD` directory.
      '/plugin/RFT-UCD/': [
        {
          text: 'RFT UCD',
          items: [
            { text: 'Downloads', link: 'plugin/RFT-UCD/downloads' },
            { text: 'Overview', link: 'plugin/RFT-UCD/overview' },
            { text: 'README', link: 'plugin/RFT-UCD/README' },
            { text: 'Steps', link: 'plugin/RFT-UCD/steps' },
            { text: 'Usage', link: 'plugin/RFT-UCD/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RFT-WebUI-UCD` directory.
      '/plugin/RFT-WebUI-UCD/': [
        {
          text: 'RFT WebUI UCD',
          items: [
            { text: 'Downloads', link: 'plugin/RFT-WebUI-UCD/downloads' },
            { text: 'Overview', link: 'plugin/RFT-WebUI-UCD/overview' },
            { text: 'README', link: 'plugin/RFT-WebUI-UCD/README' },
            { text: 'Steps', link: 'plugin/RFT-WebUI-UCD/steps' },
            { text: 'Usage', link: 'plugin/RFT-WebUI-UCD/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RIT-UCD` directory.
      '/plugin/RIT-UCD/': [
        {
          text: 'RIT UCD',
          items: [
            { text: 'Downloads', link: 'plugin/RIT-UCD/downloads' },
            { text: 'Overview', link: 'plugin/RIT-UCD/overview' },
            { text: 'README', link: 'plugin/RIT-UCD/README' },
            { text: 'Steps', link: 'plugin/RIT-UCD/steps' },
            { text: 'Usage', link: 'plugin/RIT-UCD/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RPM` directory.
      '/plugin/RPM/': [
        {
          text: 'RPM',
          items: [
            { text: 'Downloads', link: 'plugin/RPM/downloads' },
            { text: 'Overview', link: 'plugin/RPM/overview' },
            { text: 'README', link: 'plugin/RPM/README' },
            { text: 'Steps', link: 'plugin/RPM/steps' },
            { text: 'Usage', link: 'plugin/RPM/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RPT-UCD` directory.
      '/plugin/RPT-UCD/': [
        {
          text: 'RPT UCD',
          items: [
            { text: 'Downloads', link: 'plugin/RPT-UCD/downloads' },
            { text: 'Overview', link: 'plugin/RPT-UCD/overview' },
            { text: 'README', link: 'plugin/RPT-UCD/README' },
            { text: 'Steps', link: 'plugin/RPT-UCD/steps' },
            { text: 'Usage', link: 'plugin/RPT-UCD/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RTAS-UCD` directory.
      '/plugin/RTAS-UCD/': [
        {
          text: 'RTAS UCD',
          items: [
            { text: 'Downloads', link: 'plugin/RTAS-UCD/downloads' },
            { text: 'Overview', link: 'plugin/RTAS-UCD/overview' },
            { text: 'README', link: 'plugin/RTAS-UCD/README' },
            { text: 'Steps', link: 'plugin/RTAS-UCD/steps' },
            { text: 'Usage', link: 'plugin/RTAS-UCD/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RTVS-UCD` directory.
      '/plugin/RTVS-UCD/': [
        {
          text: 'RTVS UCD',
          items: [
            { text: 'Downloads', link: 'plugin/RTVS-UCD/downloads' },
            { text: 'Overview', link: 'plugin/RTVS-UCD/overview' },
            { text: 'README', link: 'plugin/RTVS-UCD/README' },
            { text: 'Steps', link: 'plugin/RTVS-UCD/steps' },
            { text: 'Usage', link: 'plugin/RTVS-UCD/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Rally` directory.
      '/plugin/Rally/': [
        {
          text: 'Rally',
          items: [
            { text: 'Downloads', link: 'plugin/Rally/downloads' },
            { text: 'Overview', link: 'plugin/Rally/overview' },
            { text: 'README', link: 'plugin/Rally/README' },
            { text: 'Steps', link: 'plugin/Rally/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Remedy` directory.
      '/plugin/Remedy/': [
        {
          text: 'Remedy',
          items: [
            { text: 'Downloads', link: 'plugin/Remedy/downloads' },
            { text: 'Overview', link: 'plugin/Remedy/overview' },
            { text: 'README', link: 'plugin/Remedy/README' },
            { text: 'Steps', link: 'plugin/Remedy/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/SAP-CTS` directory.
      '/plugin/SAP-CTS/': [
        {
          text: 'SAP CTS',
          items: [
            { text: 'Downloads', link: 'plugin/SAP-CTS/downloads' },
            { text: 'README', link: 'plugin/SAP-CTS/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/SQL-JDBC` directory.
      '/plugin/SQL-JDBC/': [
        {
          text: 'SQL JDBC',
          items: [
            { text: 'Downloads', link: 'plugin/SQL-JDBC/downloads' },
            { text: 'Overview', link: 'plugin/SQL-JDBC/overview' },
            { text: 'README', link: 'plugin/SQL-JDBC/README' },
            { text: 'Steps', link: 'plugin/SQL-JDBC/steps' },
            { text: 'Troubleshooting', link: 'plugin/SQL-JDBC/troubleshooting' },
            { text: 'Usage', link: 'plugin/SQL-JDBC/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/SQLCmd` directory.
      '/plugin/SQLCmd/': [
        {
          text: 'SQLCmd',
          items: [
            { text: 'Downloads', link: 'plugin/SQLCmd/downloads' },
            { text: 'Overview', link: 'plugin/SQLCmd/overview' },
            { text: 'README', link: 'plugin/SQLCmd/README' },
            { text: 'Steps', link: 'plugin/SQLCmd/steps' },
            { text: 'Usage', link: 'plugin/SQLCmd/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/SQLPlus` directory.
      '/plugin/SQLPlus/': [
        {
          text: 'SQLPlus',
          items: [
            { text: 'Downloads', link: 'plugin/SQLPlus/downloads' },
            { text: 'Overview', link: 'plugin/SQLPlus/overview' },
            { text: 'README', link: 'plugin/SQLPlus/README' },
            { text: 'Steps', link: 'plugin/SQLPlus/steps' },
            { text: 'Usage', link: 'plugin/SQLPlus/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Selenium` directory.
      '/plugin/Selenium/': [
        {
          text: 'Selenium',
          items: [
            { text: 'Downloads', link: 'plugin/Selenium/downloads' },
            { text: 'Overview', link: 'plugin/Selenium/overview' },
            { text: 'README', link: 'plugin/Selenium/README' },
            { text: 'Steps', link: 'plugin/Selenium/steps' },
            { text: 'Usage', link: 'plugin/Selenium/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ServiceControlManager` directory.
      '/plugin/ServiceControlManager/': [
        {
          text: 'ServiceControlManager',
          items: [
            { text: 'Downloads', link: 'plugin/ServiceControlManager/downloads' },
            { text: 'Overview', link: 'plugin/ServiceControlManager/overview' },
            { text: 'README', link: 'plugin/ServiceControlManager/README' },
            { text: 'Steps', link: 'plugin/ServiceControlManager/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ServiceNow` directory.
      '/plugin/ServiceNow/': [
        {
          text: 'ServiceNow',
          items: [
            { text: 'Downloads', link: 'plugin/ServiceNow/downloads' },
            { text: 'Overview', link: 'plugin/ServiceNow/overview' },
            { text: 'README', link: 'plugin/ServiceNow/README' },
            { text: 'Steps', link: 'plugin/ServiceNow/steps' },
            { text: 'Troubleshooting', link: 'plugin/ServiceNow/troubleshooting' },
            { text: 'Usage', link: 'plugin/ServiceNow/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Sharepoint` directory.
      '/plugin/Sharepoint/': [
        {
          text: 'Sharepoint',
          items: [
            { text: 'Downloads', link: 'plugin/Sharepoint/downloads' },
            { text: 'Overview', link: 'plugin/Sharepoint/overview' },
            { text: 'README', link: 'plugin/Sharepoint/README' },
            { text: 'Steps', link: 'plugin/Sharepoint/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Shell` directory.
      '/plugin/Shell/': [
        {
          text: 'Shell',
          items: [
            { text: 'Downloads', link: 'plugin/Shell/downloads' },
            { text: 'Overview', link: 'plugin/Shell/overview' },
            { text: 'README', link: 'plugin/Shell/README' },
            { text: 'Steps', link: 'plugin/Shell/steps' },
            { text: 'Usage', link: 'plugin/Shell/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Subversion-export` directory.
      '/plugin/Subversion-export/': [
        {
          text: 'Subversion export',
          items: [
            { text: 'Downloads', link: 'plugin/Subversion-export/downloads' },
            { text: 'Overview', link: 'plugin/Subversion-export/overview' },
            { text: 'README', link: 'plugin/Subversion-export/README' },
            { text: 'Steps', link: 'plugin/Subversion-export/steps' },
            { text: 'Usage', link: 'plugin/Subversion-export/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/SubversionSourceConfig` directory.
      '/plugin/SubversionSourceConfig/': [
        {
          text: 'SubversionSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/SubversionSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/SubversionSourceConfig/overview' },
            { text: 'README', link: 'plugin/SubversionSourceConfig/README' },
            { text: 'Steps', link: 'plugin/SubversionSourceConfig/steps' },
            { text: 'Usage', link: 'plugin/SubversionSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/SystemInformation` directory.
      '/plugin/SystemInformation/': [
        {
          text: 'SystemInformation',
          items: [
            { text: 'Downloads', link: 'plugin/SystemInformation/downloads' },
            { text: 'Overview', link: 'plugin/SystemInformation/overview' },
            { text: 'README', link: 'plugin/SystemInformation/README' },
            { text: 'Steps', link: 'plugin/SystemInformation/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/TFS-SourceConfig` directory.
      '/plugin/TFS-SourceConfig/': [
        {
          text: 'TFS SourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/TFS-SourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/TFS-SourceConfig/overview' },
            { text: 'README', link: 'plugin/TFS-SourceConfig/README' },
            { text: 'Steps', link: 'plugin/TFS-SourceConfig/steps' },
            { text: 'Usage', link: 'plugin/TFS-SourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/TFS_SCM-SourceConfig` directory.
      '/plugin/TFS_SCM-SourceConfig/': [
        {
          text: 'TFS_SCM SourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/TFS_SCM-SourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/TFS_SCM-SourceConfig/overview' },
            { text: 'README', link: 'plugin/TFS_SCM-SourceConfig/README' },
            { text: 'Settings', link: 'plugin/TFS_SCM-SourceConfig/settings' },
            { text: 'Troubleshooting', link: 'plugin/TFS_SCM-SourceConfig/troubleshooting' },
            { text: 'Usage', link: 'plugin/TFS_SCM-SourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/TeamCitySourceConfig` directory.
      '/plugin/TeamCitySourceConfig/': [
        {
          text: 'TeamCitySourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/TeamCitySourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/TeamCitySourceConfig/overview' },
            { text: 'README', link: 'plugin/TeamCitySourceConfig/README' },
            { text: 'Steps', link: 'plugin/TeamCitySourceConfig/steps' },
            { text: 'Usage', link: 'plugin/TeamCitySourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Tomcat` directory.
      '/plugin/Tomcat/': [
        {
          text: 'Tomcat',
          items: [
            { text: 'Downloads', link: 'plugin/Tomcat/downloads' },
            { text: 'Overview', link: 'plugin/Tomcat/overview' },
            { text: 'README', link: 'plugin/Tomcat/README' },
            { text: 'Steps', link: 'plugin/Tomcat/steps' },
            { text: 'Usage', link: 'plugin/Tomcat/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/UrbanCodePackageManager` directory.
      '/plugin/UrbanCodePackageManager/': [
        {
          text: 'UrbanCodePackageManager',
          items: [
            { text: 'Downloads', link: 'plugin/UrbanCodePackageManager/downloads' },
            { text: 'Overview', link: 'plugin/UrbanCodePackageManager/overview' },
            { text: 'README', link: 'plugin/UrbanCodePackageManager/README' },
            { text: 'Steps', link: 'plugin/UrbanCodePackageManager/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/UrbancodeVFS` directory.
      '/plugin/UrbancodeVFS/': [
        {
          text: 'UrbancodeVFS',
          items: [
            { text: 'Downloads', link: 'plugin/UrbancodeVFS/downloads' },
            { text: 'Overview', link: 'plugin/UrbancodeVFS/overview' },
            { text: 'README', link: 'plugin/UrbancodeVFS/README' },
            { text: 'Steps', link: 'plugin/UrbancodeVFS/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WLDeploy` directory.
      '/plugin/WLDeploy/': [
        {
          text: 'WLDeploy',
          items: [
            { text: 'Downloads', link: 'plugin/WLDeploy/downloads' },
            { text: 'Overview', link: 'plugin/WLDeploy/overview' },
            { text: 'README', link: 'plugin/WLDeploy/README' },
            { text: 'Steps', link: 'plugin/WLDeploy/steps' },
            { text: 'Usage', link: 'plugin/WLDeploy/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WSRR` directory.
      '/plugin/WSRR/': [
        {
          text: 'WSRR',
          items: [
            { text: 'Downloads', link: 'plugin/WSRR/downloads' },
            { text: 'Overview', link: 'plugin/WSRR/overview' },
            { text: 'README', link: 'plugin/WSRR/README' },
            { text: 'Steps', link: 'plugin/WSRR/steps' },
            { text: 'Usage', link: 'plugin/WSRR/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebLogic-WLST` directory.
      '/plugin/WebLogic-WLST/': [
        {
          text: 'WebLogic WLST',
          items: [
            { text: 'Downloads', link: 'plugin/WebLogic-WLST/downloads' },
            { text: 'Overview', link: 'plugin/WebLogic-WLST/overview' },
            { text: 'README', link: 'plugin/WebLogic-WLST/README' },
            { text: 'Steps', link: 'plugin/WebLogic-WLST/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebLogicSecurityMgmt` directory.
      '/plugin/WebLogicSecurityMgmt/': [
        {
          text: 'WebLogicSecurityMgmt',
          items: [
            { text: 'Downloads', link: 'plugin/WebLogicSecurityMgmt/downloads' },
            { text: 'Overview', link: 'plugin/WebLogicSecurityMgmt/overview' },
            { text: 'README', link: 'plugin/WebLogicSecurityMgmt/README' },
            { text: 'Steps', link: 'plugin/WebLogicSecurityMgmt/steps' },
            { text: 'Troubleshooting', link: 'plugin/WebLogicSecurityMgmt/troubleshooting' },
            { text: 'Usage', link: 'plugin/WebLogicSecurityMgmt/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSphereBPM` directory.
      '/plugin/WebSphereBPM/': [
        {
          text: 'WebSphereBPM',
          items: [
            { text: 'Downloads', link: 'plugin/WebSphereBPM/downloads' },
            { text: 'Overview', link: 'plugin/WebSphereBPM/overview' },
            { text: 'README', link: 'plugin/WebSphereBPM/README' },
            { text: 'Steps', link: 'plugin/WebSphereBPM/steps' },
            { text: 'Usage', link: 'plugin/WebSphereBPM/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSphereBPMSourceConfig` directory.
      '/plugin/WebSphereBPMSourceConfig/': [
        {
          text: 'WebSphereBPMSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/WebSphereBPMSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/WebSphereBPMSourceConfig/overview' },
            { text: 'README', link: 'plugin/WebSphereBPMSourceConfig/README' },
            { text: 'Settings', link: 'plugin/WebSphereBPMSourceConfig/settings' },
            { text: 'Usage', link: 'plugin/WebSphereBPMSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSphereCommerce` directory.
      '/plugin/WebSphereCommerce/': [
        {
          text: 'WebSphereCommerce',
          items: [
            { text: 'Downloads', link: 'plugin/WebSphereCommerce/downloads' },
            { text: 'Overview', link: 'plugin/WebSphereCommerce/overview' },
            { text: 'README', link: 'plugin/WebSphereCommerce/README' },
            { text: 'Steps', link: 'plugin/WebSphereCommerce/steps' },
            { text: 'Usage', link: 'plugin/WebSphereCommerce/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSphereConfiguration` directory.
      '/plugin/WebSphereConfiguration/': [
        {
          text: 'WebSphereConfiguration',
          items: [
            { text: 'Downloads', link: 'plugin/WebSphereConfiguration/downloads' },
            { text: 'Example applications', link: 'plugin/WebSphereConfiguration/example applications' },
            { text: 'Example processes', link: 'plugin/WebSphereConfiguration/example processes' },
            { text: 'Overview', link: 'plugin/WebSphereConfiguration/overview' },
            { text: 'README', link: 'plugin/WebSphereConfiguration/README' },
            { text: 'Roles', link: 'plugin/WebSphereConfiguration/roles' },
            { text: 'Steps', link: 'plugin/WebSphereConfiguration/steps' },
            { text: 'Troubleshooting', link: 'plugin/WebSphereConfiguration/troubleshooting' },
            { text: 'Usage', link: 'plugin/WebSphereConfiguration/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSphereLiberty` directory.
      '/plugin/WebSphereLiberty/': [
        {
          text: 'WebSphereLiberty',
          items: [
            { text: 'Downloads', link: 'plugin/WebSphereLiberty/downloads' },
            { text: 'Overview', link: 'plugin/WebSphereLiberty/overview' },
            { text: 'README', link: 'plugin/WebSphereLiberty/README' },
            { text: 'Steps', link: 'plugin/WebSphereLiberty/steps' },
            { text: 'Troubleshooting', link: 'plugin/WebSphereLiberty/troubleshooting' },
            { text: 'Usage', link: 'plugin/WebSphereLiberty/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSphereMQ` directory.
      '/plugin/WebSphereMQ/': [
        {
          text: 'WebSphereMQ',
          items: [
            { text: 'Downloads', link: 'plugin/WebSphereMQ/downloads' },
            { text: 'Overview', link: 'plugin/WebSphereMQ/overview' },
            { text: 'README', link: 'plugin/WebSphereMQ/README' },
            { text: 'Steps', link: 'plugin/WebSphereMQ/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSphereMessageBroker-CMP` directory.
      '/plugin/WebSphereMessageBroker-CMP/': [
        {
          text: 'WebSphereMessageBroker CMP',
          items: [
            { text: 'Downloads', link: 'plugin/WebSphereMessageBroker-CMP/downloads' },
            { text: 'Overview', link: 'plugin/WebSphereMessageBroker-CMP/overview' },
            { text: 'README', link: 'plugin/WebSphereMessageBroker-CMP/README' },
            { text: 'Steps', link: 'plugin/WebSphereMessageBroker-CMP/steps' },
            { text: 'Troubleshooting', link: 'plugin/WebSphereMessageBroker-CMP/troubleshooting' },
            { text: 'Usage', link: 'plugin/WebSphereMessageBroker-CMP/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WebSpherePortal` directory.
      '/plugin/WebSpherePortal/': [
        {
          text: 'WebSpherePortal',
          items: [
            { text: 'Downloads', link: 'plugin/WebSpherePortal/downloads' },
            { text: 'Overview', link: 'plugin/WebSpherePortal/overview' },
            { text: 'README', link: 'plugin/WebSpherePortal/README' },
            { text: 'Steps', link: 'plugin/WebSpherePortal/steps' },
            { text: 'Troubleshooting', link: 'plugin/WebSpherePortal/troubleshooting' },
            { text: 'Usage', link: 'plugin/WebSpherePortal/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Websphere` directory.
      '/plugin/Websphere/': [
        {
          text: 'Websphere',
          items: [
            { text: 'Downloads', link: 'plugin/Websphere/downloads' },
            { text: 'Overview', link: 'plugin/Websphere/overview' },
            { text: 'README', link: 'plugin/Websphere/README' },
            { text: 'Roles', link: 'plugin/Websphere/roles' },
            { text: 'Steps', link: 'plugin/Websphere/steps' },
            { text: 'Troubleshooting', link: 'plugin/Websphere/troubleshooting' },
            { text: 'Usage', link: 'plugin/Websphere/usage' },
            { text: 'User permissions', link: 'plugin/Websphere/user permissions' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WinRSAgentInstall` directory.
      '/plugin/WinRSAgentInstall/': [
        {
          text: 'WinRSAgentInstall',
          items: [
            { text: 'Downloads', link: 'plugin/WinRSAgentInstall/downloads' },
            { text: 'Overview', link: 'plugin/WinRSAgentInstall/overview' },
            { text: 'README', link: 'plugin/WinRSAgentInstall/README' },
            { text: 'Steps', link: 'plugin/WinRSAgentInstall/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WindowsFailoverCluster` directory.
      '/plugin/WindowsFailoverCluster/': [
        {
          text: 'WindowsFailoverCluster',
          items: [
            { text: 'Downloads', link: 'plugin/WindowsFailoverCluster/downloads' },
            { text: 'Overview', link: 'plugin/WindowsFailoverCluster/overview' },
            { text: 'README', link: 'plugin/WindowsFailoverCluster/README' },
            { text: 'Steps', link: 'plugin/WindowsFailoverCluster/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/WindowsSystemTools` directory.
      '/plugin/WindowsSystemTools/': [
        {
          text: 'WindowsSystemTools',
          items: [
            { text: 'Downloads', link: 'plugin/WindowsSystemTools/downloads' },
            { text: 'Overview', link: 'plugin/WindowsSystemTools/overview' },
            { text: 'README', link: 'plugin/WindowsSystemTools/README' },
            { text: 'Steps', link: 'plugin/WindowsSystemTools/steps' },
            { text: 'Troubleshooting', link: 'plugin/WindowsSystemTools/troubleshooting' },
            { text: 'Usage', link: 'plugin/WindowsSystemTools/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/actifio` directory.
      '/plugin/actifio/': [
        {
          text: 'Actifio',
          items: [
            { text: 'README', link: 'plugin/actifio/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/air-plugin-CASCM` directory.
      '/plugin/air-plugin-CASCM/': [
        {
          text: 'Air plugin CASCM',
          items: [
            { text: 'Downloads', link: 'plugin/air-plugin-CASCM/downloads' },
            { text: 'Overview', link: 'plugin/air-plugin-CASCM/overview' },
            { text: 'README', link: 'plugin/air-plugin-CASCM/README' },
            { text: 'Steps', link: 'plugin/air-plugin-CASCM/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/air-plugin-RTC-scm` directory.
      '/plugin/air-plugin-RTC-scm/': [
        {
          text: 'Air plugin RTC scm',
          items: [
            { text: 'Downloads', link: 'plugin/air-plugin-RTC-scm/downloads' },
            { text: 'Overview', link: 'plugin/air-plugin-RTC-scm/overview' },
            { text: 'README', link: 'plugin/air-plugin-RTC-scm/README' },
            { text: 'Settings', link: 'plugin/air-plugin-RTC-scm/settings' },
            { text: 'Usage', link: 'plugin/air-plugin-RTC-scm/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/air-worklight` directory.
      '/plugin/air-worklight/': [
        {
          text: 'Air worklight',
          items: [
            { text: 'Downloads', link: 'plugin/air-worklight/downloads' },
            { text: 'Overview', link: 'plugin/air-worklight/overview' },
            { text: 'README', link: 'plugin/air-worklight/README' },
            { text: 'Steps', link: 'plugin/air-worklight/steps' },
            { text: 'Troubleshooting', link: 'plugin/air-worklight/troubleshooting' },
            { text: 'Usage', link: 'plugin/air-worklight/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ansible` directory.
      '/plugin/ansible/': [
        {
          text: 'Ansible',
          items: [
            { text: 'Downloads', link: 'plugin/ansible/downloads' },
            { text: 'Overview', link: 'plugin/ansible/overview' },
            { text: 'README', link: 'plugin/ansible/README' },
            { text: 'Steps', link: 'plugin/ansible/steps' },
            { text: 'Usage', link: 'plugin/ansible/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/apache-hadoop` directory.
      '/plugin/apache-hadoop/': [
        {
          text: 'Apache hadoop',
          items: [
            { text: 'README', link: 'plugin/apache-hadoop/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/apiconnect` directory.
      '/plugin/apiconnect/': [
        {
          text: 'Apiconnect',
          items: [
            { text: 'Downloads', link: 'plugin/apiconnect/downloads' },
            { text: 'Overview', link: 'plugin/apiconnect/overview' },
            { text: 'README', link: 'plugin/apiconnect/README' },
            { text: 'Steps', link: 'plugin/apiconnect/steps' },
            { text: 'Troubleshooting', link: 'plugin/apiconnect/troubleshooting' },
            { text: 'Tutorials', link: 'plugin/apiconnect/tutorials' },
            { text: 'Usage', link: 'plugin/apiconnect/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/apple-xcode` directory.
      '/plugin/apple-xcode/': [
        {
          text: 'Apple xcode',
          items: [
            { text: 'README', link: 'plugin/apple-xcode/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/apprenda` directory.
      '/plugin/apprenda/': [
        {
          text: 'Apprenda',
          items: [
            { text: 'README', link: 'plugin/apprenda/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/appscan` directory.
      '/plugin/appscan/': [
        {
          text: 'Appscan',
          items: [
            { text: 'Downloads', link: 'plugin/appscan/downloads' },
            { text: 'Overview', link: 'plugin/appscan/overview' },
            { text: 'README', link: 'plugin/appscan/README' },
            { text: 'Steps', link: 'plugin/appscan/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/argocd` directory.
      '/plugin/argocd/': [
        {
          text: 'Argocd',
          items: [
            { text: 'Downloads', link: 'plugin/argocd/downloads' },
            { text: 'Overview', link: 'plugin/argocd/overview' },
            { text: 'README', link: 'plugin/argocd/README' },
            { text: 'Steps', link: 'plugin/argocd/steps' },
            { text: 'Usage', link: 'plugin/argocd/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/aspera` directory.
      '/plugin/aspera/': [
        {
          text: 'Aspera',
          items: [
            { text: 'Downloads', link: 'plugin/aspera/downloads' },
            { text: 'Overview', link: 'plugin/aspera/overview' },
            { text: 'README', link: 'plugin/aspera/README' },
            { text: 'Steps', link: 'plugin/aspera/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/avnet-talos` directory.
      '/plugin/avnet-talos/': [
        {
          text: 'Avnet talos',
          items: [
            { text: 'README', link: 'plugin/avnet-talos/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/aws-lambda` directory.
      '/plugin/aws-lambda/': [
        {
          text: 'Aws lambda',
          items: [
            { text: 'Downloads', link: 'plugin/aws-lambda/downloads' },
            { text: 'README', link: 'plugin/aws-lambda/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/bigfix` directory.
      '/plugin/bigfix/': [
        {
          text: 'Bigfix',
          items: [
            { text: 'Downloads', link: 'plugin/bigfix/downloads' },
            { text: 'Overview', link: 'plugin/bigfix/overview' },
            { text: 'README', link: 'plugin/bigfix/README' },
            { text: 'Steps', link: 'plugin/bigfix/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/bluemix-autoscale` directory.
      '/plugin/bluemix-autoscale/': [
        {
          text: 'Bluemix autoscale',
          items: [
            { text: 'Downloads', link: 'plugin/bluemix-autoscale/downloads' },
            { text: 'Overview', link: 'plugin/bluemix-autoscale/overview' },
            { text: 'README', link: 'plugin/bluemix-autoscale/README' },
            { text: 'Steps', link: 'plugin/bluemix-autoscale/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/box` directory.
      '/plugin/box/': [
        {
          text: 'Box',
          items: [
            { text: 'README', link: 'plugin/box/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/cloud-foundry-ibm-containers` directory.
      '/plugin/cloud-foundry-ibm-containers/': [
        {
          text: 'Cloud foundry ibm containers',
          items: [
            { text: 'Downloads', link: 'plugin/cloud-foundry-ibm-containers/downloads' },
            { text: 'Overview', link: 'plugin/cloud-foundry-ibm-containers/overview' },
            { text: 'README', link: 'plugin/cloud-foundry-ibm-containers/README' },
            { text: 'Steps', link: 'plugin/cloud-foundry-ibm-containers/steps' },
            { text: 'Usage', link: 'plugin/cloud-foundry-ibm-containers/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/cloud-foundry` directory.
      '/plugin/cloud-foundry/': [
        {
          text: 'Cloud foundry',
          items: [
            { text: 'Downloads', link: 'plugin/cloud-foundry/downloads' },
            { text: 'Overview', link: 'plugin/cloud-foundry/overview' },
            { text: 'README', link: 'plugin/cloud-foundry/README' },
            { text: 'Steps', link: 'plugin/cloud-foundry/steps' },
            { text: 'Troubleshooting', link: 'plugin/cloud-foundry/troubleshooting' },
            { text: 'Usage', link: 'plugin/cloud-foundry/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/cloudant` directory.
      '/plugin/cloudant/': [
        {
          text: 'Cloudant',
          items: [
            { text: 'README', link: 'plugin/cloudant/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/cognos-analytics` directory.
      '/plugin/cognos-analytics/': [
        {
          text: 'Cognos analytics',
          items: [
            { text: 'Downloads', link: 'plugin/cognos-analytics/downloads' },
            { text: 'Overview', link: 'plugin/cognos-analytics/overview' },
            { text: 'README', link: 'plugin/cognos-analytics/README' },
            { text: 'Steps', link: 'plugin/cognos-analytics/steps' },
            { text: 'Usage', link: 'plugin/cognos-analytics/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/cyberark` directory.
      '/plugin/cyberark/': [
        {
          text: 'Cyberark',
          items: [
            { text: 'Overview', link: 'plugin/cyberark/overview' },
            { text: 'README', link: 'plugin/cyberark/README' },
            { text: 'Steps', link: 'plugin/cyberark/steps' },
            { text: 'Usage', link: 'plugin/cyberark/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/datapower` directory.
      '/plugin/datapower/': [
        {
          text: 'Datapower',
          items: [
            { text: 'Downloads', link: 'plugin/datapower/downloads' },
            { text: 'Overview', link: 'plugin/datapower/overview' },
            { text: 'README', link: 'plugin/datapower/README' },
            { text: 'Steps', link: 'plugin/datapower/steps' },
            { text: 'Usage', link: 'plugin/datapower/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/datastage` directory.
      '/plugin/datastage/': [
        {
          text: 'Datastage',
          items: [
            { text: 'Downloads', link: 'plugin/datastage/downloads' },
            { text: 'Overview', link: 'plugin/datastage/overview' },
            { text: 'README', link: 'plugin/datastage/README' },
            { text: 'Steps', link: 'plugin/datastage/steps' },
            { text: 'Usage', link: 'plugin/datastage/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/datical-db` directory.
      '/plugin/datical-db/': [
        {
          text: 'Datical db',
          items: [
            { text: 'README', link: 'plugin/datical-db/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/dbmaestro` directory.
      '/plugin/dbmaestro/': [
        {
          text: 'Dbmaestro',
          items: [
            { text: 'README', link: 'plugin/dbmaestro/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/docker-compose` directory.
      '/plugin/docker-compose/': [
        {
          text: 'Docker compose',
          items: [
            { text: 'Downloads', link: 'plugin/docker-compose/downloads' },
            { text: 'Overview', link: 'plugin/docker-compose/overview' },
            { text: 'README', link: 'plugin/docker-compose/README' },
            { text: 'Steps', link: 'plugin/docker-compose/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/docker-plugin` directory.
      '/plugin/docker-plugin/': [
        {
          text: 'Docker plugin',
          items: [
            { text: 'Downloads', link: 'plugin/docker-plugin/downloads' },
            { text: 'Overview', link: 'plugin/docker-plugin/overview' },
            { text: 'README', link: 'plugin/docker-plugin/README' },
            { text: 'Steps', link: 'plugin/docker-plugin/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/eggplant` directory.
      '/plugin/eggplant/': [
        {
          text: 'Eggplant',
          items: [
            { text: 'README', link: 'plugin/eggplant/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/general-utilities` directory.
      '/plugin/general-utilities/': [
        {
          text: 'General utilities',
          items: [
            { text: 'Downloads', link: 'plugin/general-utilities/downloads' },
            { text: 'Overview', link: 'plugin/general-utilities/overview' },
            { text: 'README', link: 'plugin/general-utilities/README' },
            { text: 'Steps', link: 'plugin/general-utilities/steps' },
            { text: 'Usage', link: 'plugin/general-utilities/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/git-install` directory.
      '/plugin/git-install/': [
        {
          text: 'Git install',
          items: [
            { text: 'README', link: 'plugin/git-install/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/gitlab-generic-packages` directory.
      '/plugin/gitlab-generic-packages/': [
        {
          text: 'Gitlab generic packages',
          items: [
            { text: 'Downloads', link: 'plugin/gitlab-generic-packages/downloads' },
            { text: 'Overview', link: 'plugin/gitlab-generic-packages/overview' },
            { text: 'README', link: 'plugin/gitlab-generic-packages/README' },
            { text: 'Steps', link: 'plugin/gitlab-generic-packages/steps' },
            { text: 'Usage', link: 'plugin/gitlab-generic-packages/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/gitlab-sourceconfig-generic-packages` directory.
      '/plugin/gitlab-sourceconfig-generic-packages/': [
        {
          text: 'Gitlab sourceconfig generic packages',
          items: [
            { text: 'Downloads', link: 'plugin/gitlab-sourceconfig-generic-packages/downloads' },
            { text: 'Overview', link: 'plugin/gitlab-sourceconfig-generic-packages/overview' },
            { text: 'README', link: 'plugin/gitlab-sourceconfig-generic-packages/README' },
            { text: 'Steps', link: 'plugin/gitlab-sourceconfig-generic-packages/steps' },
            { text: 'Usage', link: 'plugin/gitlab-sourceconfig-generic-packages/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/hp-loadrunner` directory.
      '/plugin/hp-loadrunner/': [
        {
          text: 'Hp loadrunner',
          items: [
            { text: 'Downloads', link: 'plugin/hp-loadrunner/downloads' },
            { text: 'Overview', link: 'plugin/hp-loadrunner/overview' },
            { text: 'README', link: 'plugin/hp-loadrunner/README' },
            { text: 'Steps', link: 'plugin/hp-loadrunner/steps' },
            { text: 'Usage', link: 'plugin/hp-loadrunner/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-ace` directory.
      '/plugin/ibm-ace/': [
        {
          text: 'Ibm ace',
          items: [
            { text: 'Downloads', link: 'plugin/ibm-ace/downloads' },
            { text: 'Overview', link: 'plugin/ibm-ace/overview' },
            { text: 'README', link: 'plugin/ibm-ace/README' },
            { text: 'Steps', link: 'plugin/ibm-ace/steps' },
            { text: 'Usage', link: 'plugin/ibm-ace/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-db2-for-z-os-package` directory.
      '/plugin/ibm-db2-for-z-os-package/': [
        {
          text: 'Ibm db2 for z os package',
          items: [
            { text: 'README', link: 'plugin/ibm-db2-for-z-os-package/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-globalization-pipeline` directory.
      '/plugin/ibm-globalization-pipeline/': [
        {
          text: 'Ibm globalization pipeline',
          items: [
            { text: 'README', link: 'plugin/ibm-globalization-pipeline/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-installation-manager` directory.
      '/plugin/ibm-installation-manager/': [
        {
          text: 'Ibm installation manager',
          items: [
            { text: 'Overview', link: 'plugin/ibm-installation-manager/overview' },
            { text: 'README', link: 'plugin/ibm-installation-manager/README' },
            { text: 'Steps', link: 'plugin/ibm-installation-manager/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-instana` directory.
      '/plugin/ibm-instana/': [
        {
          text: 'Ibm instana',
          items: [
            { text: 'Downloads', link: 'plugin/ibm-instana/downloads' },
            { text: 'Overview', link: 'plugin/ibm-instana/overview' },
            { text: 'README', link: 'plugin/ibm-instana/README' },
            { text: 'Steps', link: 'plugin/ibm-instana/steps' },
            { text: 'Usage', link: 'plugin/ibm-instana/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-maas360` directory.
      '/plugin/ibm-maas360/': [
        {
          text: 'Ibm maas360',
          items: [
            { text: 'README', link: 'plugin/ibm-maas360/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-maximo` directory.
      '/plugin/ibm-maximo/': [
        {
          text: 'Ibm maximo',
          items: [
            { text: 'Downloads', link: 'plugin/ibm-maximo/downloads' },
            { text: 'Overview', link: 'plugin/ibm-maximo/overview' },
            { text: 'README', link: 'plugin/ibm-maximo/README' },
            { text: 'Steps', link: 'plugin/ibm-maximo/steps' },
            { text: 'Usage', link: 'plugin/ibm-maximo/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-mq-for-z-os-generate-mqsc-commands` directory.
      '/plugin/ibm-mq-for-z-os-generate-mqsc-commands/': [
        {
          text: 'Ibm mq for z os generate mqsc commands',
          items: [
            { text: 'Overview', link: 'plugin/ibm-mq-for-z-os-generate-mqsc-commands/overview' },
            { text: 'README', link: 'plugin/ibm-mq-for-z-os-generate-mqsc-commands/README' },
            { text: 'Steps', link: 'plugin/ibm-mq-for-z-os-generate-mqsc-commands/steps' },
            { text: 'Usage', link: 'plugin/ibm-mq-for-z-os-generate-mqsc-commands/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-odm-source-config` directory.
      '/plugin/ibm-odm-source-config/': [
        {
          text: 'Ibm odm source config',
          items: [
            { text: 'Downloads', link: 'plugin/ibm-odm-source-config/downloads' },
            { text: 'Overview', link: 'plugin/ibm-odm-source-config/overview' },
            { text: 'README', link: 'plugin/ibm-odm-source-config/README' },
            { text: 'Settings', link: 'plugin/ibm-odm-source-config/settings' },
            { text: 'Usage', link: 'plugin/ibm-odm-source-config/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-odm` directory.
      '/plugin/ibm-odm/': [
        {
          text: 'Ibm odm',
          items: [
            { text: 'Downloads', link: 'plugin/ibm-odm/downloads' },
            { text: 'Overview', link: 'plugin/ibm-odm/overview' },
            { text: 'README', link: 'plugin/ibm-odm/README' },
            { text: 'Steps', link: 'plugin/ibm-odm/steps' },
            { text: 'Usage', link: 'plugin/ibm-odm/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-rational-automation-framework-for-websphere` directory.
      '/plugin/ibm-rational-automation-framework-for-websphere/': [
        {
          text: 'Ibm rational automation framework for websphere',
          items: [
            { text: 'README', link: 'plugin/ibm-rational-automation-framework-for-websphere/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-rational-clearquest` directory.
      '/plugin/ibm-rational-clearquest/': [
        {
          text: 'Ibm rational clearquest',
          items: [
            { text: 'README', link: 'plugin/ibm-rational-clearquest/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-rational-quality-manager-rqm` directory.
      '/plugin/ibm-rational-quality-manager-rqm/': [
        {
          text: 'Ibm rational quality manager rqm',
          items: [
            { text: 'Overview', link: 'plugin/ibm-rational-quality-manager-rqm/overview' },
            { text: 'README', link: 'plugin/ibm-rational-quality-manager-rqm/README' },
            { text: 'Steps', link: 'plugin/ibm-rational-quality-manager-rqm/steps' },
            { text: 'Troubleshooting', link: 'plugin/ibm-rational-quality-manager-rqm/troubleshooting' },
            { text: 'Usage', link: 'plugin/ibm-rational-quality-manager-rqm/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-rational-team-concert-build` directory.
      '/plugin/ibm-rational-team-concert-build/': [
        {
          text: 'Ibm rational team concert build',
          items: [
            { text: 'README', link: 'plugin/ibm-rational-team-concert-build/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-sterling-b2b-integrator` directory.
      '/plugin/ibm-sterling-b2b-integrator/': [
        {
          text: 'Ibm sterling b2b integrator',
          items: [
            { text: 'README', link: 'plugin/ibm-sterling-b2b-integrator/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-vdp` directory.
      '/plugin/ibm-vdp/': [
        {
          text: 'Ibm vdp',
          items: [
            { text: 'README', link: 'plugin/ibm-vdp/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-workload-automation` directory.
      '/plugin/ibm-workload-automation/': [
        {
          text: 'Ibm workload automation',
          items: [
            { text: 'README', link: 'plugin/ibm-workload-automation/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/iis-configuration` directory.
      '/plugin/iis-configuration/': [
        {
          text: 'Iis configuration',
          items: [
            { text: 'Downloads', link: 'plugin/iis-configuration/downloads' },
            { text: 'Overview', link: 'plugin/iis-configuration/overview' },
            { text: 'README', link: 'plugin/iis-configuration/README' },
            { text: 'Steps', link: 'plugin/iis-configuration/steps' },
            { text: 'Troubleshooting', link: 'plugin/iis-configuration/troubleshooting' },
            { text: 'Usage', link: 'plugin/iis-configuration/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/infosphere-isd` directory.
      '/plugin/infosphere-isd/': [
        {
          text: 'Infosphere isd',
          items: [
            { text: 'Downloads', link: 'plugin/infosphere-isd/downloads' },
            { text: 'Overview', link: 'plugin/infosphere-isd/overview' },
            { text: 'README', link: 'plugin/infosphere-isd/README' },
            { text: 'Steps', link: 'plugin/infosphere-isd/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/java-shell` directory.
      '/plugin/java-shell/': [
        {
          text: 'Java shell',
          items: [
            { text: 'Downloads', link: 'plugin/java-shell/downloads' },
            { text: 'Overview', link: 'plugin/java-shell/overview' },
            { text: 'README', link: 'plugin/java-shell/README' },
            { text: 'Steps', link: 'plugin/java-shell/steps' },
            { text: 'Usage', link: 'plugin/java-shell/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/jboss-on` directory.
      '/plugin/jboss-on/': [
        {
          text: 'Jboss on',
          items: [
            { text: 'README', link: 'plugin/jboss-on/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/jenkins-job-manager` directory.
      '/plugin/jenkins-job-manager/': [
        {
          text: 'Jenkins job manager',
          items: [
            { text: 'README', link: 'plugin/jenkins-job-manager/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/jenkins-pipeline-ud-plugin` directory.
      '/plugin/jenkins-pipeline-ud-plugin/': [
        {
          text: 'Jenkins pipeline ud plugin',
          items: [
            { text: 'Downloads', link: 'plugin/jenkins-pipeline-ud-plugin/downloads' },
            { text: 'Overview', link: 'plugin/jenkins-pipeline-ud-plugin/overview' },
            { text: 'README', link: 'plugin/jenkins-pipeline-ud-plugin/README' },
            { text: 'Usage', link: 'plugin/jenkins-pipeline-ud-plugin/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/jenkins-ud-plugin` directory.
      '/plugin/jenkins-ud-plugin/': [
        {
          text: 'Jenkins ud plugin',
          items: [
            { text: 'Downloads', link: 'plugin/jenkins-ud-plugin/downloads' },
            { text: 'Overview', link: 'plugin/jenkins-ud-plugin/overview' },
            { text: 'README', link: 'plugin/jenkins-ud-plugin/README' },
            { text: 'Usage', link: 'plugin/jenkins-ud-plugin/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/kubernetes` directory.
      '/plugin/kubernetes/': [
        {
          text: 'Kubernetes',
          items: [
            { text: 'Downloads', link: 'plugin/kubernetes/downloads' },
            { text: 'Overview', link: 'plugin/kubernetes/overview' },
            { text: 'README', link: 'plugin/kubernetes/README' },
            { text: 'Steps', link: 'plugin/kubernetes/steps' },
            { text: 'Usage', link: 'plugin/kubernetes/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/liquibase` directory.
      '/plugin/liquibase/': [
        {
          text: 'Liquibase',
          items: [
            { text: 'README', link: 'plugin/liquibase/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/logigear-testarchitect` directory.
      '/plugin/logigear-testarchitect/': [
        {
          text: 'Logigear testarchitect',
          items: [
            { text: 'README', link: 'plugin/logigear-testarchitect/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/mesos-marathon` directory.
      '/plugin/mesos-marathon/': [
        {
          text: 'Mesos marathon',
          items: [
            { text: 'Downloads', link: 'plugin/mesos-marathon/downloads' },
            { text: 'Overview', link: 'plugin/mesos-marathon/overview' },
            { text: 'README', link: 'plugin/mesos-marathon/README' },
            { text: 'Steps', link: 'plugin/mesos-marathon/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/microsoft-visual-studio-team-services-vsts` directory.
      '/plugin/microsoft-visual-studio-team-services-vsts/': [
        {
          text: 'Microsoft visual studio team services vsts',
          items: [
            { text: 'README', link: 'plugin/microsoft-visual-studio-team-services-vsts/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/mulesoft` directory.
      '/plugin/mulesoft/': [
        {
          text: 'Mulesoft',
          items: [
            { text: 'Downloads', link: 'plugin/mulesoft/downloads' },
            { text: 'Overview', link: 'plugin/mulesoft/overview' },
            { text: 'README', link: 'plugin/mulesoft/README' },
            { text: 'Steps', link: 'plugin/mulesoft/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/new-relic` directory.
      '/plugin/new-relic/': [
        {
          text: 'New relic',
          items: [
            { text: 'README', link: 'plugin/new-relic/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/nexus-source-config` directory.
      '/plugin/nexus-source-config/': [
        {
          text: 'Nexus source config',
          items: [
            { text: 'Configuration', link: 'plugin/nexus-source-config/configuration' },
            { text: 'Downloads', link: 'plugin/nexus-source-config/downloads' },
            { text: 'Overview', link: 'plugin/nexus-source-config/overview' },
            { text: 'README', link: 'plugin/nexus-source-config/README' },
            { text: 'Steps', link: 'plugin/nexus-source-config/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/nexus` directory.
      '/plugin/nexus/': [
        {
          text: 'Nexus',
          items: [
            { text: 'Downloads', link: 'plugin/nexus/downloads' },
            { text: 'Overview', link: 'plugin/nexus/overview' },
            { text: 'README', link: 'plugin/nexus/README' },
            { text: 'Steps', link: 'plugin/nexus/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/node-js` directory.
      '/plugin/node-js/': [
        {
          text: 'Node js',
          items: [
            { text: 'README', link: 'plugin/node-js/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/node-red` directory.
      '/plugin/node-red/': [
        {
          text: 'Node red',
          items: [
            { text: 'README', link: 'plugin/node-red/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/nuget-source-config` directory.
      '/plugin/nuget-source-config/': [
        {
          text: 'Nuget source config',
          items: [
            { text: 'Downloads', link: 'plugin/nuget-source-config/downloads' },
            { text: 'Overview', link: 'plugin/nuget-source-config/overview' },
            { text: 'README', link: 'plugin/nuget-source-config/README' },
            { text: 'Settings', link: 'plugin/nuget-source-config/settings' },
            { text: 'Usage', link: 'plugin/nuget-source-config/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/onetest-server` directory.
      '/plugin/onetest-server/': [
        {
          text: 'Onetest server',
          items: [
            { text: 'Downloads', link: 'plugin/onetest-server/downloads' },
            { text: 'README', link: 'plugin/onetest-server/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/openshift` directory.
      '/plugin/openshift/': [
        {
          text: 'Openshift',
          items: [
            { text: 'Downloads', link: 'plugin/openshift/downloads' },
            { text: 'Overview', link: 'plugin/openshift/overview' },
            { text: 'README', link: 'plugin/openshift/README' },
            { text: 'Steps', link: 'plugin/openshift/steps' },
            { text: 'Usage', link: 'plugin/openshift/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/optim` directory.
      '/plugin/optim/': [
        {
          text: 'Optim',
          items: [
            { text: 'Downloads', link: 'plugin/optim/downloads' },
            { text: 'Overview', link: 'plugin/optim/overview' },
            { text: 'README', link: 'plugin/optim/README' },
            { text: 'Steps', link: 'plugin/optim/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/plugin-air-Android` directory.
      '/plugin/plugin-air-Android/': [
        {
          text: 'Plugin air Android',
          items: [
            { text: 'Downloads', link: 'plugin/plugin-air-Android/downloads' },
            { text: 'README', link: 'plugin/plugin-air-Android/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/plugin-air-OSB-Configuration-Management` directory.
      '/plugin/plugin-air-OSB-Configuration-Management/': [
        {
          text: 'Plugin air OSB Configuration Management',
          items: [
            { text: 'Downloads', link: 'plugin/plugin-air-OSB-Configuration-Management/downloads' },
            { text: 'Overview', link: 'plugin/plugin-air-OSB-Configuration-Management/overview' },
            { text: 'README', link: 'plugin/plugin-air-OSB-Configuration-Management/README' },
            { text: 'Steps', link: 'plugin/plugin-air-OSB-Configuration-Management/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/plugin-air-RTC-WorkItems` directory.
      '/plugin/plugin-air-RTC-WorkItems/': [
        {
          text: 'Plugin air RTC WorkItems',
          items: [
            { text: 'Downloads', link: 'plugin/plugin-air-RTC-WorkItems/downloads' },
            { text: 'Overview', link: 'plugin/plugin-air-RTC-WorkItems/overview' },
            { text: 'README', link: 'plugin/plugin-air-RTC-WorkItems/README' },
            { text: 'Steps', link: 'plugin/plugin-air-RTC-WorkItems/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/plugin-air-TFS-WorkItems` directory.
      '/plugin/plugin-air-TFS-WorkItems/': [
        {
          text: 'Plugin air TFS WorkItems',
          items: [
            { text: 'Downloads', link: 'plugin/plugin-air-TFS-WorkItems/downloads' },
            { text: 'Overview', link: 'plugin/plugin-air-TFS-WorkItems/overview' },
            { text: 'README', link: 'plugin/plugin-air-TFS-WorkItems/README' },
            { text: 'Steps', link: 'plugin/plugin-air-TFS-WorkItems/steps' },
            { text: 'Usage', link: 'plugin/plugin-air-TFS-WorkItems/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/plugin-air-WLI-Resource-Management` directory.
      '/plugin/plugin-air-WLI-Resource-Management/': [
        {
          text: 'Plugin air WLI Resource Management',
          items: [
            { text: 'Downloads', link: 'plugin/plugin-air-WLI-Resource-Management/downloads' },
            { text: 'Overview', link: 'plugin/plugin-air-WLI-Resource-Management/overview' },
            { text: 'README', link: 'plugin/plugin-air-WLI-Resource-Management/README' },
            { text: 'Steps', link: 'plugin/plugin-air-WLI-Resource-Management/steps' },
            { text: 'Troubleshooting', link: 'plugin/plugin-air-WLI-Resource-Management/troubleshooting' },
            { text: 'Usage', link: 'plugin/plugin-air-WLI-Resource-Management/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/plugin-air-WLS-Resource-Management` directory.
      '/plugin/plugin-air-WLS-Resource-Management/': [
        {
          text: 'Plugin air WLS Resource Management',
          items: [
            { text: 'Downloads', link: 'plugin/plugin-air-WLS-Resource-Management/downloads' },
            { text: 'Overview', link: 'plugin/plugin-air-WLS-Resource-Management/overview' },
            { text: 'README', link: 'plugin/plugin-air-WLS-Resource-Management/README' },
            { text: 'Steps', link: 'plugin/plugin-air-WLS-Resource-Management/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/plugin-air-WebLogic-Application-Deployment` directory.
      '/plugin/plugin-air-WebLogic-Application-Deployment/': [
        {
          text: 'Plugin air WebLogic Application Deployment',
          items: [
            { text: 'Downloads', link: 'plugin/plugin-air-WebLogic-Application-Deployment/downloads' },
            { text: 'Overview', link: 'plugin/plugin-air-WebLogic-Application-Deployment/overview' },
            { text: 'README', link: 'plugin/plugin-air-WebLogic-Application-Deployment/README' },
            { text: 'Steps', link: 'plugin/plugin-air-WebLogic-Application-Deployment/steps' },
            { text: 'Usage', link: 'plugin/plugin-air-WebLogic-Application-Deployment/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/powershell-integration` directory.
      '/plugin/powershell-integration/': [
        {
          text: 'Powershell integration',
          items: [
            { text: 'Downloads', link: 'plugin/powershell-integration/downloads' },
            { text: 'Overview', link: 'plugin/powershell-integration/overview' },
            { text: 'README', link: 'plugin/powershell-integration/README' },
            { text: 'Steps', link: 'plugin/powershell-integration/steps' },
            { text: 'Troubleshooting', link: 'plugin/powershell-integration/troubleshooting' },
            { text: 'Usage', link: 'plugin/powershell-integration/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/property-utils` directory.
      '/plugin/property-utils/': [
        {
          text: 'Property utils',
          items: [
            { text: 'README', link: 'plugin/property-utils/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/puppet` directory.
      '/plugin/puppet/': [
        {
          text: 'Puppet',
          items: [
            { text: 'README', link: 'plugin/puppet/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/resource-utilities` directory.
      '/plugin/resource-utilities/': [
        {
          text: 'Resource utilities',
          items: [
            { text: 'Downloads', link: 'plugin/resource-utilities/downloads' },
            { text: 'README', link: 'plugin/resource-utilities/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/salesforce` directory.
      '/plugin/salesforce/': [
        {
          text: 'Salesforce',
          items: [
            { text: 'Downloads', link: 'plugin/salesforce/downloads' },
            { text: 'Overview', link: 'plugin/salesforce/overview' },
            { text: 'README', link: 'plugin/salesforce/README' },
            { text: 'Steps', link: 'plugin/salesforce/steps' },
            { text: 'Usage', link: 'plugin/salesforce/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/send-smtp-email` directory.
      '/plugin/send-smtp-email/': [
        {
          text: 'Send smtp email',
          items: [
            { text: 'Downloads', link: 'plugin/send-smtp-email/downloads' },
            { text: 'Overview', link: 'plugin/send-smtp-email/overview' },
            { text: 'README', link: 'plugin/send-smtp-email/README' },
            { text: 'Steps', link: 'plugin/send-smtp-email/steps' },
            { text: 'Usage', link: 'plugin/send-smtp-email/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/siebel` directory.
      '/plugin/siebel/': [
        {
          text: 'Siebel',
          items: [
            { text: 'README', link: 'plugin/siebel/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/skytap-automation-pack` directory.
      '/plugin/skytap-automation-pack/': [
        {
          text: 'Skytap automation pack',
          items: [
            { text: 'README', link: 'plugin/skytap-automation-pack/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/slack` directory.
      '/plugin/slack/': [
        {
          text: 'Slack',
          items: [
            { text: 'README', link: 'plugin/slack/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/sourceconfig-github-release` directory.
      '/plugin/sourceconfig-github-release/': [
        {
          text: 'Sourceconfig github release',
          items: [
            { text: 'Downloads', link: 'plugin/sourceconfig-github-release/downloads' },
            { text: 'Overview', link: 'plugin/sourceconfig-github-release/overview' },
            { text: 'README', link: 'plugin/sourceconfig-github-release/README' },
            { text: 'Steps', link: 'plugin/sourceconfig-github-release/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/sourceconfig-nexus-v3` directory.
      '/plugin/sourceconfig-nexus-v3/': [
        {
          text: 'Sourceconfig nexus v3',
          items: [
            { text: 'Downloads', link: 'plugin/sourceconfig-nexus-v3/downloads' },
            { text: 'Overview', link: 'plugin/sourceconfig-nexus-v3/overview' },
            { text: 'README', link: 'plugin/sourceconfig-nexus-v3/README' },
            { text: 'Steps', link: 'plugin/sourceconfig-nexus-v3/steps' },
            { text: 'Usage', link: 'plugin/sourceconfig-nexus-v3/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/sourceconfig-npm` directory.
      '/plugin/sourceconfig-npm/': [
        {
          text: 'Sourceconfig npm',
          items: [
            { text: 'Downloads', link: 'plugin/sourceconfig-npm/downloads' },
            { text: 'Overview', link: 'plugin/sourceconfig-npm/overview' },
            { text: 'README', link: 'plugin/sourceconfig-npm/README' },
            { text: 'Settings', link: 'plugin/sourceconfig-npm/settings' },
            { text: 'Usage', link: 'plugin/sourceconfig-npm/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/sybase` directory.
      '/plugin/sybase/': [
        {
          text: 'Sybase',
          items: [
            { text: 'Downloads', link: 'plugin/sybase/downloads' },
            { text: 'Overview', link: 'plugin/sybase/overview' },
            { text: 'README', link: 'plugin/sybase/README' },
            { text: 'Steps', link: 'plugin/sybase/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/text-utility` directory.
      '/plugin/text-utility/': [
        {
          text: 'Text utility',
          items: [
            { text: 'README', link: 'plugin/text-utility/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/tibco` directory.
      '/plugin/tibco/': [
        {
          text: 'Tibco',
          items: [
            { text: 'README', link: 'plugin/tibco/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uBuild` directory.
      '/plugin/uBuild/': [
        {
          text: 'UBuild',
          items: [
            { text: 'Downloads', link: 'plugin/uBuild/downloads' },
            { text: 'Overview', link: 'plugin/uBuild/overview' },
            { text: 'README', link: 'plugin/uBuild/README' },
            { text: 'Steps', link: 'plugin/uBuild/steps' },
            { text: 'Usage', link: 'plugin/uBuild/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uBuildSourceConfig` directory.
      '/plugin/uBuildSourceConfig/': [
        {
          text: 'UBuildSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/uBuildSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/uBuildSourceConfig/overview' },
            { text: 'README', link: 'plugin/uBuildSourceConfig/README' },
            { text: 'Steps', link: 'plugin/uBuildSourceConfig/steps' },
            { text: 'Usage', link: 'plugin/uBuildSourceConfig/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeploy-Application` directory.
      '/plugin/uDeploy-Application/': [
        {
          text: 'UDeploy Application',
          items: [
            { text: 'Downloads', link: 'plugin/uDeploy-Application/downloads' },
            { text: 'Overview', link: 'plugin/uDeploy-Application/overview' },
            { text: 'README', link: 'plugin/uDeploy-Application/README' },
            { text: 'Steps', link: 'plugin/uDeploy-Application/steps' },
            { text: 'Usage', link: 'plugin/uDeploy-Application/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeploy-Component` directory.
      '/plugin/uDeploy-Component/': [
        {
          text: 'UDeploy Component',
          items: [
            { text: 'Downloads', link: 'plugin/uDeploy-Component/downloads' },
            { text: 'Overview', link: 'plugin/uDeploy-Component/overview' },
            { text: 'README', link: 'plugin/uDeploy-Component/README' },
            { text: 'Steps', link: 'plugin/uDeploy-Component/steps' },
            { text: 'Usage', link: 'plugin/uDeploy-Component/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeploy-Environment` directory.
      '/plugin/uDeploy-Environment/': [
        {
          text: 'UDeploy Environment',
          items: [
            { text: 'Downloads', link: 'plugin/uDeploy-Environment/downloads' },
            { text: 'Overview', link: 'plugin/uDeploy-Environment/overview' },
            { text: 'README', link: 'plugin/uDeploy-Environment/README' },
            { text: 'Steps', link: 'plugin/uDeploy-Environment/steps' },
            { text: 'Usage', link: 'plugin/uDeploy-Environment/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeploy-Process` directory.
      '/plugin/uDeploy-Process/': [
        {
          text: 'UDeploy Process',
          items: [
            { text: 'Downloads', link: 'plugin/uDeploy-Process/downloads' },
            { text: 'Overview', link: 'plugin/uDeploy-Process/overview' },
            { text: 'README', link: 'plugin/uDeploy-Process/README' },
            { text: 'Steps', link: 'plugin/uDeploy-Process/steps' },
            { text: 'Usage', link: 'plugin/uDeploy-Process/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeploy-Resource` directory.
      '/plugin/uDeploy-Resource/': [
        {
          text: 'UDeploy Resource',
          items: [
            { text: 'Downloads', link: 'plugin/uDeploy-Resource/downloads' },
            { text: 'Overview', link: 'plugin/uDeploy-Resource/overview' },
            { text: 'README', link: 'plugin/uDeploy-Resource/README' },
            { text: 'Steps', link: 'plugin/uDeploy-Resource/steps' },
            { text: 'Usage', link: 'plugin/uDeploy-Resource/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeploy-System` directory.
      '/plugin/uDeploy-System/': [
        {
          text: 'UDeploy System',
          items: [
            { text: 'Downloads', link: 'plugin/uDeploy-System/downloads' },
            { text: 'Overview', link: 'plugin/uDeploy-System/overview' },
            { text: 'README', link: 'plugin/uDeploy-System/README' },
            { text: 'Steps', link: 'plugin/uDeploy-System/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeploy-Version` directory.
      '/plugin/uDeploy-Version/': [
        {
          text: 'UDeploy Version',
          items: [
            { text: 'Downloads', link: 'plugin/uDeploy-Version/downloads' },
            { text: 'Overview', link: 'plugin/uDeploy-Version/overview' },
            { text: 'README', link: 'plugin/uDeploy-Version/README' },
            { text: 'Steps', link: 'plugin/uDeploy-Version/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/uDeployConfigManagement` directory.
      '/plugin/uDeployConfigManagement/': [
        {
          text: 'UDeployConfigManagement',
          items: [
            { text: 'Downloads', link: 'plugin/uDeployConfigManagement/downloads' },
            { text: 'Overview', link: 'plugin/uDeployConfigManagement/overview' },
            { text: 'README', link: 'plugin/uDeployConfigManagement/README' },
            { text: 'Steps', link: 'plugin/uDeployConfigManagement/steps' },
            { text: 'Troubleshooting', link: 'plugin/uDeployConfigManagement/troubleshooting' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin` directory.
      '/plugin/ucr-plugin/': [
        {
          text: 'Ucr plugin',
          items: [
            { text: 'Downloads', link: 'plugin/ucr-plugin/downloads' },
            { text: 'Overview', link: 'plugin/ucr-plugin/overview' },
            { text: 'README', link: 'plugin/ucr-plugin/README' },
            { text: 'Steps', link: 'plugin/ucr-plugin/steps' },
            { text: 'Usage', link: 'plugin/ucr-plugin/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/venafi` directory.
      '/plugin/venafi/': [
        {
          text: 'Venafi',
          items: [
            { text: 'README', link: 'plugin/venafi/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/vmware-airwatch` directory.
      '/plugin/vmware-airwatch/': [
        {
          text: 'Vmware airwatch',
          items: [
            { text: 'README', link: 'plugin/vmware-airwatch/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/web-utilities` directory.
      '/plugin/web-utilities/': [
        {
          text: 'Web utilities',
          items: [
            { text: 'Downloads', link: 'plugin/web-utilities/downloads' },
            { text: 'Overview', link: 'plugin/web-utilities/overview' },
            { text: 'README', link: 'plugin/web-utilities/README' },
            { text: 'Steps', link: 'plugin/web-utilities/steps' },
            { text: 'Usage', link: 'plugin/web-utilities/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/webseal` directory.
      '/plugin/webseal/': [
        {
          text: 'Webseal',
          items: [
            { text: 'Downloads', link: 'plugin/webseal/downloads' },
            { text: 'Overview', link: 'plugin/webseal/overview' },
            { text: 'README', link: 'plugin/webseal/README' },
            { text: 'Steps', link: 'plugin/webseal/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/websphere-install` directory.
      '/plugin/websphere-install/': [
        {
          text: 'Websphere install',
          items: [
            { text: 'Downloads', link: 'plugin/websphere-install/downloads' },
            { text: 'Overview', link: 'plugin/websphere-install/overview' },
            { text: 'README', link: 'plugin/websphere-install/README' },
            { text: 'Steps', link: 'plugin/websphere-install/steps' },
            { text: 'Usage', link: 'plugin/websphere-install/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zOS-external-artifact-download` directory.
      '/plugin/zOS-external-artifact-download/': [
        {
          text: 'ZOS external artifact download',
          items: [
            { text: 'Downloads', link: 'plugin/zOS-external-artifact-download/downloads' },
            { text: 'Overview', link: 'plugin/zOS-external-artifact-download/overview' },
            { text: 'README', link: 'plugin/zOS-external-artifact-download/README' },
            { text: 'Steps', link: 'plugin/zOS-external-artifact-download/steps' },
            { text: 'Usage', link: 'plugin/zOS-external-artifact-download/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zOSFileSourceConfig` directory.
      '/plugin/zOSFileSourceConfig/': [
        {
          text: 'ZOSFileSourceConfig',
          items: [
            { text: 'Downloads', link: 'plugin/zOSFileSourceConfig/downloads' },
            { text: 'Overview', link: 'plugin/zOSFileSourceConfig/overview' },
            { text: 'README', link: 'plugin/zOSFileSourceConfig/README' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zos-dataset-writer` directory.
      '/plugin/zos-dataset-writer/': [
        {
          text: 'Zos dataset writer',
          items: [
            { text: 'Downloads', link: 'plugin/zos-dataset-writer/downloads' },
            { text: 'Overview', link: 'plugin/zos-dataset-writer/overview' },
            { text: 'README', link: 'plugin/zos-dataset-writer/README' },
            { text: 'Steps', link: 'plugin/zos-dataset-writer/steps' },
            { text: 'Usage', link: 'plugin/zos-dataset-writer/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zos-deploy` directory.
      '/plugin/zos-deploy/': [
        {
          text: 'Zos deploy',
          items: [
            { text: 'Downloads', link: 'plugin/zos-deploy/downloads' },
            { text: 'Overview', link: 'plugin/zos-deploy/overview' },
            { text: 'README', link: 'plugin/zos-deploy/README' },
            { text: 'Steps', link: 'plugin/zos-deploy/steps' },
            { text: 'Troubleshooting', link: 'plugin/zos-deploy/troubleshooting' },
            { text: 'Usage', link: 'plugin/zos-deploy/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zos-ftp` directory.
      '/plugin/zos-ftp/': [
        {
          text: 'Zos ftp',
          items: [
            { text: 'Downloads', link: 'plugin/zos-ftp/downloads' },
            { text: 'Overview', link: 'plugin/zos-ftp/overview' },
            { text: 'README', link: 'plugin/zos-ftp/README' },
            { text: 'Steps', link: 'plugin/zos-ftp/steps' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zos-ibm-integration-bus-ucd` directory.
      '/plugin/zos-ibm-integration-bus-ucd/': [
        {
          text: 'Zos ibm integration bus ucd',
          items: [
            { text: 'Downloads', link: 'plugin/zos-ibm-integration-bus-ucd/downloads' },
            { text: 'Overview', link: 'plugin/zos-ibm-integration-bus-ucd/overview' },
            { text: 'README', link: 'plugin/zos-ibm-integration-bus-ucd/README' },
            { text: 'Steps', link: 'plugin/zos-ibm-integration-bus-ucd/steps' },
            { text: 'Usage', link: 'plugin/zos-ibm-integration-bus-ucd/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zos-multi-generate-artifact-info` directory.
      '/plugin/zos-multi-generate-artifact-info/': [
        {
          text: 'Zos multi generate artifact info',
          items: [
            { text: 'Downloads', link: 'plugin/zos-multi-generate-artifact-info/downloads' },
            { text: 'Overview', link: 'plugin/zos-multi-generate-artifact-info/overview' },
            { text: 'README', link: 'plugin/zos-multi-generate-artifact-info/README' },
            { text: 'Steps', link: 'plugin/zos-multi-generate-artifact-info/steps' },
            { text: 'Usage', link: 'plugin/zos-multi-generate-artifact-info/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zos-replacetokens-uss` directory.
      '/plugin/zos-replacetokens-uss/': [
        {
          text: 'Zos replacetokens uss',
          items: [
            { text: 'Downloads', link: 'plugin/zos-replacetokens-uss/downloads' },
            { text: 'Overview', link: 'plugin/zos-replacetokens-uss/overview' },
            { text: 'README', link: 'plugin/zos-replacetokens-uss/README' },
            { text: 'Steps', link: 'plugin/zos-replacetokens-uss/steps' },
            { text: 'Usage', link: 'plugin/zos-replacetokens-uss/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zos-rexx` directory.
      '/plugin/zos-rexx/': [
        {
          text: 'Zos rexx',
          items: [
            { text: 'Downloads', link: 'plugin/zos-rexx/downloads' },
            { text: 'Overview', link: 'plugin/zos-rexx/overview' },
            { text: 'README', link: 'plugin/zos-rexx/README' },
            { text: 'Steps', link: 'plugin/zos-rexx/steps' },
            { text: 'Usage', link: 'plugin/zos-rexx/usage' }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/zosmf` directory.
      '/plugin/zosmf/': [
        {
          text: 'Zosmf',
          items: [
            { text: 'Downloads', link: 'plugin/zosmf/downloads' },
            { text: 'Overview', link: 'plugin/zosmf/overview' },
            { text: 'README', link: 'plugin/zosmf/README' },
            { text: 'Steps', link: 'plugin/zosmf/steps' },
            { text: 'Usage', link: 'plugin/zosmf/usage' }
          ]
        }
      ]

    }
,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/devops-deploy-plugin-docs' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",

    }
  }
})
