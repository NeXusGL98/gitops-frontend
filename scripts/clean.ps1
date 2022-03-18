<# Script for cleaning a helm relase and deleting a namespace in kubernetes#>

$namespace = Read-Host -Prompt 'Enter release/namespace'

if(!(helm status $namespace -n $namespace)){
    Write-Output "Namespace $namespace does not exist."
}elseif ( helm status $namespace -n $namespace)
{
     helm uninstall $namespace -n $namespace --debug
     kubectl delete ns $namespace
}