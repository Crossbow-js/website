---
videos:
  1: 
    - id: IlFcIpowI4A
      title: Crossbow - Task aliases (YAML) 
    - id: QP45339fVWI
      title: Crossbow - Task aliases (cbfile.js)
    - id: wpD-U2gtMWA
      title: Crossbow - Task aliases (crossbow.js)
  2: 
    - id: 7o09MK5JL14
      title: Crossbow - Multiple Task aliases (YAML) 
    - id: mYRNgkw-whI
      title: Crossbow - Multiple Task aliases (cbfile.js)
    - id: -wZ9ULSJi6c
      title: Crossbow - Multiple Task aliases (crossbow.js)  
  
---

Crossbow will always try to resolve aliases *first* which allows
you to re-use the same task over and over again whilst also making
for cleaner composition.

Any top-level task you define can be used as an alias, which means you 
don't have to configure anything - it just works!

{{inc 
    src="three.hbs"
    name="task-aliases"
    yml="snippets/use-task-aliases/crossbow.yml"
    cbfile="snippets/use-task-aliases/cbfile.js"
    js="snippets/use-task-aliases/crossbow.js"
}}

{{inc src="video-list.hbs" videos=page.videos.[1]}}

## Getting fancy with aliases
An area in which Crossbow leap-frogs the competition is with its strong composition features.
It will recursively resolve all of your task aliases, no matter how deep they go. This allows
you build up declarative pipe-lines of tasks that are very easy to understand.

{{inc 
    src="three.hbs"
    name="task-aliases-fancy"
    yml="snippets/use-task-aliases-fancy/crossbow.yml"
    cbfile="snippets/use-task-aliases-fancy/cbfile.js"
    js="snippets/use-task-aliases-fancy/crossbow.js"
}}

{{inc src="video-list.hbs" videos=page.videos.[2]}}

With this example, if we then ran `cb build` on the command line, both of the scripts
defined under the `clean` task would have to successfully complete before the `webpack`
task begins - furthermore should any task defined in `clean` fail, then the `webpack` task
would not execute at all!

--- 

Next up, let's see how we can move beyond simple scripts and onto [Other Ways of Defining Tasks](/docs/other-ways-of-defining-tasks)
