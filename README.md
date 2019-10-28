# deocoincore-node

A Deocoin full node for building applications and services with Node.js. A Deocoin node is extensible and can be configured to run additional services.

## Install

```bash
npm install -g deocoincore-node
deocoincore-node start
```

## Configuration

deocoincore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your deocoincore Node.

```bash
deocoincore-node create -d <deocoin-data-dir> mynode
cd mynode
deocoincore-node install <service>
deocoincore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of deocoincore:

- [Deocoin Insight API](https://github.com/deocoincore/insight-api)
- [Deocoin Explorer](https://github.com/deocoincore/deocoin-explorer)
