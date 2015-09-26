apeman
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/apeman-labo/apeman
[bd_travis_url]: http://travis-ci.org/apeman-labo/apeman
[bd_travis_shield_url]: http://img.shields.io/travis/apeman-labo/apeman.svg?style=flat
[bd_license_url]: https://github.com/apeman-labo/apeman/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/apeman-labo/apeman
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/apeman-labo/apeman.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/apeman-labo/apeman.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/apeman-labo/apeman
[bd_gemnasium_shield_url]: https://gemnasium.com/apeman-labo/apeman.svg
[bd_npm_url]: http://www.npmjs.org/package/apeman
[bd_npm_shield_url]: http://img.shields.io/npm/v/apeman.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/apeman.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Meta application framework.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
------------

apeman is available as an [npm][npm_url] package.

```bash
$ npm install apeman -g
```

[nodejs_url]: https://nodejs.org/
[npm_url]: https://www.npmjs.com
<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Quick Start.md.hbs" Start -->

<a name="section-doc-readme-02-quick-start-md"></a>
Quick Start
------------

Run `apeman init` command in your project root.

```bash
# Initialize a current directory as an apemanfile.
$ apeman init
```

This generates a file named **Apemanfile.js** , which contains configurations for an apeman project.

Then you can use various apeman commands at the directory.

<!-- Section from "doc/readme/02.Quick Start.md.hbs" End -->

<!-- Section from "doc/readme/03.Command.md.hbs" Start -->

<a name="section-doc-readme-03-command-md"></a>
Mastering apeman Commands
-----

### Available Commands

- [apeman init](#command-init)
- [apeman scaffold](#command-scaffold)
- [apeman show](#command-show)
- [apeman tmpl](#command-tmpl)
- [apeman watch](#command-watch)

<a name="command-init" />
### `apeman init` Command

This command is a synonym of [apeman-init](https://www.npmjs.com/package/apeman-init).

```bash
$ apeman init -h


  Usage: init [options]

  Initialize a directory as an apeman project.

  Options:

    -h, --help               output usage information
    -f, --force              Force to init.
    -d, --dirname <dirname>  Directory name to init.
    -s, --silent             Disable console logs
    -p, --pkg <pkg>          Path of package.json


```

For mor information, see [README of apeman-init](https://github.com/apeman-repo/apeman-init#readme)

<a name="command-scaffold" />
### `apeman scaffold` Command

This command is a synonym of [apeman-scaffold](https://www.npmjs.com/package/apeman-scaffold).

```bash
$ apeman scaffold -h


  Usage: scaffold [options] [type] [dest]

  Generate project scaffold.

  Options:

    -h, --help      output usage information
    -t, --straight  Scaffold without asking.
    -s, --silent    Disable console logs
    -f, --force     Force to generate scaffold


```

For mor information, see [README of apeman-scaffold](https://github.com/apeman-repo/apeman-scaffold#readme)

<a name="command-show" />
### `apeman show` Command

This command is a synonym of [apeman-show](https://www.npmjs.com/package/apeman-show).

```bash
$ apeman show -h


  Usage: show [options] [keypath]

  Show apemanfile configuration.

  Options:

    -h, --help                           output usage information
    -c, --configuration <configuration>  Pathname of Apemanfile
    -k, --keysonly                       Show keys only


```

For mor information, see [README of apeman-show](https://github.com/apeman-repo/apeman-show#readme)

<a name="command-tmpl" />
### `apeman tmpl` Command

This command is a synonym of [apeman-tmpl](https://www.npmjs.com/package/apeman-tmpl).

```bash
$ apeman tmpl -h


  Usage: tmpl [options]

  Render template files.

  Options:

    -h, --help                           output usage information
    -v, --verbose                        Show verbose logs
    -p, --pattern <pattern>              Template name pattern
    -l, --list                           List available templates
    -c, --configuration <configuration>  Pathname of Apemanfile


```

For mor information, see [README of apeman-tmpl](https://github.com/apeman-repo/apeman-tmpl#readme)

<a name="command-watch" />
### `apeman watch` Command

This command is a synonym of [apeman-watch](https://www.npmjs.com/package/apeman-watch).

```bash
$ apeman watch -h


  Usage: watch [options] [nam]

  Watch files to trigger action.

  Options:

    -h, --help                           output usage information
    -v, --verbose                        Show verbose logs
    -c, --configuration <configuration>  Pathname of Apemanfile


```

For mor information, see [README of apeman-watch](https://github.com/apeman-repo/apeman-watch#readme)


<!-- Section from "doc/readme/03.Command.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/apeman-labo/apeman/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [apeman-init](https://www.npmjs.com/package/apeman-init)
+ [apeman-scaffold](https://www.npmjs.com/package/apeman-scaffold)
+ [apeman-show](https://www.npmjs.com/package/apeman-show)
+ [apeman-tmpl](https://www.npmjs.com/package/apeman-tmpl)
+ [apeman-watch](https://www.npmjs.com/package/apeman-watch)

<!-- Links End -->
