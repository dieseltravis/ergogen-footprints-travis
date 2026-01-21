# footprints/travis
These are kicad footprints that have been converted from kicad format to work with Ergonen. They are all beta quality and have only been tested on localhost by myself.

See https://github.com/ceoloide/ergogen-footprints for info on how to properly install and use.

How I add this submodule:
```bash
git submodule add https://github.com/dieseltravis/ergogen-footprints-travis/ footprints/travis
#Note:#######################################################################^^^^^^^^^^ This path should match where your local footprints directory is
```

In your config.yaml:
```yaml
meta:
  engine: 4.1.0 # Min Ergogen version for KiCad 8 footprints
[...]
pcbs:
  your_keyboard:
    template: kicad8 # Required, since footprints are KiCad 8 only
    outlines:
      [...]
    footprints:
      mcu:
        what: travis/ScottoKeebs-RP2040_Pro_Micro
        [...]
      led:
        what: travis/led_sk6812mini-e
        [...]
      diode:
        what: travis/DSMD_1206_3216Metric
        [...]
```
