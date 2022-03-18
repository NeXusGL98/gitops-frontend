# Documentation

# Helm charts
This project is setup using helm. 

Chart name is **cluster**. Inside this folder you might find all the k8s templates and values.

```

helm upgrade cluster cluster \
--atomic \
--cleanup-on-fail \
--install \
--namespace cluster \
--debug \
--set "env.username=Jose Gil"

```

