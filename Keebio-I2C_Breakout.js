// Keebio-I2C_Breakout
// https://github.com/keebio/Keebio-Parts.pretty/blob/master/I2C_Breakout.kicad_mod
// unlike the oled footprint, this aligns on the ground pin
module.exports = {
    params: {
        designator: 'OLED',
        value: 'I2C_Breakout',
        // only F for now: side: 'F',
        refpos: [0, -2.33],
        valpos: [-2.54, 3.81, 90],
        P1:  {type: 'net', value: 'GND' }, // ground
        P2:  {type: 'net', value: 'VCC'},  // 3.3v
        P3:  {type: 'net', value: 'SCL' }, // SCL/D0"
        P4:  {type: 'net', value: 'SDA' }, // SDA/D1
        KEEBIO_KICAD: '${KEEBIO_KICAD}'
    },
    body: p => {
        const pos = (arr) => arr.join(' ');
        if (p.refpos.length === 2) {
          p.refpos.push(p.r);
        }
        if (p.valpos.length === 2) {
          p.valpos.push(p.r);
        }
        return `(footprint "I2C_Breakout" (version 20210126) (generator pcbnew) (layer "F.Cu")
    ${p.at /* parametric position */}
  (tedit 60242D9C)
  (descr "Through hole straight pin header, 1x04, 2.54mm pitch, single row")
  (tags "Through hole pin header THT 1x04 2.54mm single row")
  (attr through_hole)
  (fp_text reference "${p.ref}" (at ${pos(p.refpos)}) (layer "Cmts.User") ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp c014b26a-0804-4fd2-9801-a81caa6ec2ee)
  )
  (fp_text value "${p.value}" (at ${pos(p.valpos)}) (layer "F.Fab")
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 8725338a-2ad7-4024-bdbe-a87344fe0675)
  )
  (fp_text user "GND" (at 1.27 0 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify left))
    (tstamp 7f758bbb-02e6-4762-bffb-2fdcc4d322ad)
  )
  (fp_text user "VCC" (at 1.27 2.54 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify left))
    (tstamp 1a8271cf-7099-4ae3-bf98-6a3a35cbe5a0)
  )
  (fp_text user "SCL/D0" (at 1.27 5.08 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify left))
    (tstamp 9a31798b-bf86-4f44-8de2-17d04bbb91d8)
  )
  (fp_text user "SDA/D1" (at 1.27 7.62 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify left))
    (tstamp 69d6998c-4d6c-4446-a85e-e2aca8e26073)
  )
  (fp_text user "${p.ref}" (at 0 3.81 90) (layer "F.Fab")
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 4b08a10f-8a0c-4a7f-a23b-1d2533e0189e)
  )
  (fp_line (start 1.8 9.4) (end 1.8 -1.8) (layer "F.CrtYd") (width 0.05) (tstamp 1c613d8d-b909-478d-9d4a-367745d5e23a))
  (fp_line (start -1.8 9.4) (end 1.8 9.4) (layer "F.CrtYd") (width 0.05) (tstamp 43e28a4c-b9c6-475a-9747-2d22778c4443))
  (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer "F.CrtYd") (width 0.05) (tstamp 88b679bc-8a57-48c7-8cac-8a494a9dead4))
  (fp_line (start -1.8 -1.8) (end -1.8 9.4) (layer "F.CrtYd") (width 0.05) (tstamp b1f44e6c-340d-498f-8633-354909a89d6e))
  (fp_line (start 1.27 -1.27) (end 1.27 8.89) (layer "F.Fab") (width 0.1) (tstamp 0cc6f541-3475-4c0c-86d8-eb380275d901))
  (fp_line (start -1.27 8.89) (end -1.27 -0.635) (layer "F.Fab") (width 0.1) (tstamp 24e326a0-2898-4ff3-a88a-99520e7ecc65))
  (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (layer "F.Fab") (width 0.1) (tstamp 53683ccc-6a15-435f-87e1-6ed4ecaab509))
  (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (layer "F.Fab") (width 0.1) (tstamp aa8751d9-1d4e-48ed-bd7d-ac16671f1bc9))
  (fp_line (start 1.27 8.89) (end -1.27 8.89) (layer "F.Fab") (width 0.1) (tstamp b3ccfc10-c9a5-4b80-8d94-c50fc4cb767b))
  (pad "1" thru_hole rect (at 0 0 ${p.rot}) (locked) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ p.P1.str } (tstamp 6662c297-f39f-4e90-b7d1-b6a1dadb44b6))
  (pad "2" thru_hole oval (at 0 2.54 ${p.rot}) (locked) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ p.P2.str } (tstamp 099f7aa3-e922-4ef1-9732-ae8a90f2d205))
  (pad "3" thru_hole oval (at 0 5.08 ${p.rot}) (locked) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ p.P3.str } (tstamp 629c663c-f05f-4cc6-b74e-9958f34ed5f7))
  (pad "4" thru_hole oval (at 0 7.62 ${p.rot}) (locked) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ p.P4.str } (tstamp 13c1c6a1-300b-4210-8cc0-b9eb4e2ced94))
)
`;
    }
};