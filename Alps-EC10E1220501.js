// Alps-EC10E1220501
// https://tech.alpsalpine.com/e/products/detail/EC10E1220501/
// TODO: test to see if 10k resistors, 0.1uf caps are needed
module.exports = {
    params: {
        designator: 'ROT',
        value: 'EC10E1220501',
        // only F for now: side: 'F',
        refpos: [0, -3, 0],
        valpos: [-0.167, -5.334, 0],
        P1:  {type: 'net', value: 'A' }, // Output A
        P2:  {type: 'net', value: 'B'},  // Output B
        P3:  {type: 'net', value: 'C' }, // 
        P4:  {type: 'net', value: 'GND' }, // 2 outer pins
        TRAVIS_KICAD: '${TRAVIS_KICAD}' // ~/Projects/ergogen-footprints-travis/travis.pretty
    },
    body: p => {
        const pos = (arr) => arr.join(' ');
        if (p.refpos.length === 2) {
          p.refpos.push(p.r);
        }
        if (p.valpos.length === 2) {
          p.valpos.push(p.r);
        }
        const lblrot = (rot) => {
            // rotate and adjust rotation for readability
            if (rot > 90 || rot < -90) {
                rot += 180;
            }
            return rot;
        };
        const lbljust = (rot, justify) => {
            // rotate and adjust justify left/right for readability
            if (rot > 90 || rot < -90) {
                if (justify === 'left') {
                    justify = 'right';
                } else if (justify === 'right') {
                    justify = 'left';
                }
                // ignore center
            }
            return justify;
        };
        return `(footprint "Alps-EC10E1220501"
	(version 20241229)
	(generator "pcbnew")
	(generator_version "9.0")
	(layer "F.Cu")
    ${p.at /* parametric position */}
	(property "Reference" "${p.ref}"
		(at ${pos(p.refpos)})
		(unlocked yes)
		(layer "F.SilkS")
		${p.ref_hide}
		(uuid "0209e05c-cfe1-47ba-ac49-a1647ff0e8c3")
		(effects
			(font (size 1 1) (thickness 0.1))
		)
	)
	(property "Value" "${p.value}"
		(at ${pos(p.valpos)})
		(unlocked yes)
		(layer "F.Fab") (hide yes)
		(uuid "f578bc23-73ff-4a68-abed-596a9c6f9cf2")
		(effects
			(font (size 1 1) (thickness 0.15))
		)
	)
	(property "Datasheet" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "718c4f33-1c23-4d15-a980-df7e01c11e71")
		(effects
			(font (size 1.27 1.27) (thickness 0.15))
		)
	)
	(property "Description" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "d62d41ec-6b19-4e77-91c8-08b8a9da8754")
		(effects
			(font (size 1.27 1.27) (thickness 0.15))
		)
	)
	(attr through_hole exclude_from_pos_files)
	(fp_line
		(start -4.5 -4.4)
		(end -4.5 -3.6)
		(stroke (width 0.1) (type default))
		(layer "F.SilkS")
		(uuid "fd6a2da9-7772-4722-aab2-b1224265596e")
	)
	(fp_line
		(start -4.5 1.7)
		(end -4.5 0)
		(stroke (width 0.1) (type default))
		(layer "F.SilkS")
		(uuid "84e57433-8f72-4fd7-bdb6-caa521d7b913")
	)
	(fp_line
		(start 4.5 -4.4)
		(end 4.5 -3.6)
		(stroke (width 0.1) (type default))
		(layer "F.SilkS")
		(uuid "4de100a4-ecf1-4fd1-a88a-ba1070bf7e28")
	)
	(fp_line
		(start 4.5 1.7)
		(end 4.5 0)
		(stroke (width 0.1) (type default))
		(layer "F.SilkS")
		(uuid "c6eebfae-3e9f-475b-87ee-216ad6b2fb93")
	)
	(fp_line
		(start -3.5 1)
		(end -0.5 1)
		(stroke (width 0.1) (type default))
		(layer "Cmts.User")
		(uuid "30af9117-58bf-452e-ac8f-f5b3fdf40f9e")
	)
	(fp_line
		(start -0.5 1)
		(end -0.5 2.5)
		(stroke (width 0.1) (type default))
		(layer "Cmts.User")
		(uuid "21f67f4c-c1f7-484a-818e-8f2d81acd37d")
	)
	(fp_line
		(start -0.5 2.5)
		(end 0.5 2.5)
		(stroke (width 0.1) (type default))
		(layer "Cmts.User")
		(uuid "2893bfd8-92fc-4194-956c-c2dc969ef62d")
	)
	(fp_line
		(start 0.5 1)
		(end 3.5 1)
		(stroke (width 0.1) (type default))
		(layer "Cmts.User")
		(uuid "a16ffc0a-35b2-4da2-9c8a-be6c7ca4cce5")
	)
	(fp_line
		(start 0.5 2.5)
		(end 0.5 1)
		(stroke (width 0.1) (type default))
		(layer "Cmts.User")
		(uuid "dcdfde9b-ffe1-49b9-b872-6b0c7e9451b1")
	)
	(fp_line
		(start -5.9 -3.7)
		(end -4.8 -3.7)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "33c85f7c-fce5-4bcb-8f0f-431b19a18d6a")
	)
	(fp_line
		(start -5.9 -0.3)
		(end -5.9 -3.7)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "98776853-2003-4a90-9b96-ae45c109e346")
	)
	(fp_line
		(start -4.8 -4.7)
		(end 4.8 -4.7)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "6bc6e218-e74f-4750-ad1f-ec446d5198dd")
	)
	(fp_line
		(start -4.8 -3.7)
		(end -4.8 -4.7)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "638747a9-553f-4f34-85a5-51a2834b55fa")
	)
	(fp_line
		(start -4.8 -0.3)
		(end -5.9 -0.3)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "9ae67e20-a00f-44d1-89be-82610f9b9de9")
	)
	(fp_line
		(start -4.8 2)
		(end -4.8 -0.3)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "b86f9d2b-883b-4773-a6b1-858ff1f11cfd")
	)
	(fp_line
		(start 4.8 -4.7)
		(end 4.8 -3.7)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "e9434315-4ab5-4962-ad36-b7eb3a8802f0")
	)
	(fp_line
		(start 4.8 -3.7)
		(end 5.9 -3.7)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "f1178bae-2415-4313-9898-333d73227e83")
	)
	(fp_line
		(start 4.8 -0.3)
		(end 4.8 2)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "54a1f0eb-aa55-4e23-ae61-5eac7f2d4239")
	)
	(fp_line
		(start 4.8 2)
		(end -4.8 2)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "7e580e10-06e9-4f26-9a98-1e78ed6ba86b")
	)
	(fp_line
		(start 5.9 -3.7)
		(end 5.9 -0.3)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "ebd4cf49-d264-4970-9293-d78a0c0c0117")
	)
	(fp_line
		(start 5.9 -0.3)
		(end 4.8 -0.3)
		(stroke (width 0.05) (type default))
		(layer "F.CrtYd")
		(uuid "ff98b47b-85a2-4dae-8b7b-3f148938858e")
	)
	(fp_text user "SHAFT"
		(at 0.5 1.75)
		(unlocked yes)
		(layer "Cmts.User")
		(uuid "5b7eecca-ca35-4136-8f4c-58c47162cb61")
		(effects
			(font (size 0.5 0.5) (thickness 0.125))
			(justify left bottom)
		)
	)
	(fp_text user "${p.ref}"
		(at 0 -6.5 ${lblrot(p.rot)})
		(unlocked yes)
		(layer "F.Fab")
		(uuid "1498524e-0f42-4710-9aa4-0701267f8833")
		(effects
			(font (size 1 1) (thickness 0.15))
		)
	)
	(pad "4" thru_hole roundrect
		(at -4.5 -2 ${p.rot})
		(size 2.5 3)
		(drill oval 1.8 2.05)
		(layers "*.Cu" "*.Mask")
        ${ p.P4.str }
		(remove_unused_layers no)
		(roundrect_rratio 0.25)
		(zone_connect 2)
		(uuid "4b170b16-67d0-4621-a595-6112a8467014")
	)
	(pad "4" thru_hole roundrect
		(at 4.5 -2 ${p.rot})
		(size 2.5 3)
		(drill oval 1.8 2.05)
		(layers "*.Cu" "*.Mask")
        ${ p.P4.str }
		(remove_unused_layers no)
		(roundrect_rratio 0.25)
		(uuid "b86e2e50-6874-4d3d-a89e-1078dff58a4d")
	)
	(pad "A" thru_hole oval
		(at -2.5 0 ${p.rot})
		(size 1.4 1.7)
		(drill oval 0.7 1)
		(layers "*.Cu" "*.Mask")
        ${ p.P1.str }
		(remove_unused_layers no)
		(uuid "b0c17c82-2307-4cd7-b660-a91b8f49b3cc")
	)
	(pad "B" thru_hole oval
		(at 0 0 ${p.rot})
		(size 1.4 1.7)
		(drill oval 0.7 1)
		(layers "*.Cu" "*.Mask")
        ${ p.P2.str }
		(remove_unused_layers no)
		(uuid "d438ea68-cf91-486a-a92c-c48941175871")
	)
	(pad "C" thru_hole oval
		(at 2.5 0 ${p.rot})
		(size 1.4 1.7)
		(drill oval 0.7 1)
		(layers "*.Cu" "*.Mask")
        ${ p.P3.str }
		(remove_unused_layers no)
		(uuid "2ed72e63-c32c-4fc0-9802-032a35fa7823")
	)
	(embedded_fonts no)
    (model "${p.TRAVIS_KICAD}/Alps-EC10E1220501.step"
        (offset (xyz 0 0 0))
        (scale (xyz 1 1 1))
        (rotate (xyz 0 0 90))
    )
)`;
    }
};