
# OpenShift - Settings

## Import Version


| Name | Type | Description |
| --- | --- | --- |
| Allow Insecure Registry Connection | Boolean | Select this option to allow insecure connections to OpenShift. |
| Image Stream | String | The [folder/]repository of the image in the OpenShifts Docker registry. |
| Naming Convention | Enumeration:
| The naming convention for component versions. Docker tags can be changed. If component versions need to be immutable, select a naming convention that includes the ID. |
| OpenShift Server | String | If connecting to the OpenShift Server from a remote agent, specify the full server URI. |
| Registry Password | Password | The password used to login to the OpenShift Server. Default value is ``${p:openshiftPassword}`` |
| Registry Username | String | The username used to login to the OpenShift Server. |


