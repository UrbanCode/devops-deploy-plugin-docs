
# IBM DevOps Deploy Process - Usage


You can use this plug-in to pass data among component processes, by setting properties on process requests. Many properties are locked when a process is requested. If a step in a component process creates information that another component process must refer to, it is not trivial to set an application property or version property to capture that information. Also, application or version properties might not be the appropriate scope for a value that changes for every deployment. To pass information from a component process, use the [Set Process Request Property](#set_process_request_property) step. For the Process Request ID, specify ```${p:parentRequest}```. You can then access the property from another component process.

