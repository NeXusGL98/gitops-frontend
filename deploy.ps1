<# Script for deploy a helm relase and create a namespace in kubernetes#>

$namespace = Read-Host -Prompt 'Enter namespace'

# creating namespace if it does not exist
if (!(kubectl get namespaces $namespace)){
    Write-Output "Namespace $namespace does not exist. Trying to create it"
    kubectl create namespace $namespace
}

helm upgrade $namespace cluster `
--atomic `
--cleanup-on-fail `
--install `
--namespace $namespace `
--debug