export const debug = `
<initial rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1>

<initial 1. e4 e5 2. f4 exf4 3. Nf3 g5 4. d4 g4 5. Ne5!?>

<initial 5... Qh4+>

<initial 6. g3 fxg3 7. Qxg4>

ae) <ae...Qxg4 initial 7... Qxg4>

<ae...Qxg4 8. Nxg4>

<ae...Qxg4 8... d5>

<ae...Qxg4 9. Ne3 dxe4 10. hxg3 Nc6 11. c3>

o) <o...g2 initial 7... g2+>

<o...g2 8. Qxh4 gxh1=Q>

o1) <o1...Nxf7 o...g2 9. Nxf7?!>

<o1...Nxf7 9... Be7!>

<o1...Nxf7 10. Qh5>

<o1...Nxf7 10... Qxe4+ 11. Kd1 Qxd4+ 12. Bd2 c6!>

<o1...Nxf7 13. Nxh8+>

<o1...Nxf7 13... Kd8 14. Qxh7 Qg1⩱>

o2) <o2...Nc3 o...g2 9. Nc3!>

o21) <o21...Bb4 o...g2 9... Bb4?>

o22) <o22...d6 o...g2 9... d6?!>

o23) <o23...Be7 o...g2 9... Be7?!>

o24) <o24...h6 o...g2 9... h6>

o25) <o25...Nc6 o...g2 9... Nc6! N >
`;

export const content = `
 <initial rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1> 
 <initial 1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 6. Bc4> 
=initial 11
 <initial 6... d5!!> 
 <initial 7. exd5 Bg7> 
 <initial 8. d4> 
 A. <Nxd5 initial 8... Nxd5 9. Nc3 Nxc3 10. Bxf7+ Kf8 11. bxc3 Bxe5 12. Bb3 Bd6 13. O-O Qxh4 14. Bxf4 Bxf4 15. Rxf4+ Ke8> ∞
=Nxd5 30
 B. <O-O initial 8... O-O 9. O-O Nxd5 10. Nc3> !? 
 B1. Exchange <O-ONxc3 O-O 10... Nxc3 11. bxc3 f3 12. Qe1> +/=
 <O-ONxc3 12... Bxe5 13. Qxe5 Qxh4 14. Ba3 Nd7 15. Qf4 Nb6 16. Bxf8 Nxc4 17. Rxf3 Bf5 18. Bh6 Bg6 19. Rh3 Qe7 20. Qxg4> 
 B2. Retreat <O-ONb6 O-O 10... Nb6 11. Bxf4 Nxc4 12. Nxc4 Qxd4+ 13. Qxd4 Bxd4+ 14. Ne3>
`;

export const treePartsVariation = `
<initial rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1>

<initial 1. e4 e5 2. f4 exf4>

<a initial 3. Nf3 g5>

<a2 a 3... g6>

<b initial 3. Nc3 g5>

<b2 b 3... h6>

`;

export const kingsgambit = [
  `
<initial rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1>

<initial 1. e4 e5 2. f4 exf4 3. Nf3!! g5 4. h4 g4 5. Ne5 Nf6 6. Bc4 d5 7. exd5 Bd6 8. d4 Nh5 9. Nc3 O-O 10. Ne4 f5>


<initial 11. Ng5> !

# S) 11... Qf6

<s...Qf6 initial 11... Qf6 12. Qd3> !

<s...Qf6 12... Nd7> !

<s...Qf6 13. Nxg4>

<s...Qf6 13... Qe7+ 14. Ne5>

<s...Qf6 14... Ng3 15. Bxf4 Nxh1 16. Qf3> →

=s...Qf6 31

<s2...Nxe5 s...Qf6 14... Nxe5 15. dxe5 Qxe5+ 16. Kd1>

<s2...Nxe5 16... Ng3 17. Re1 Ne4 18. Re2>

# T) 11... Nd7

<t...Nd7 initial 11... Nd7>

<t...Nd7 12. Qd3> !

=t...Nd7 23

# T1) 12... Ng3

<t1...Ng3 t...Nd7 12... Ng3>

<t1...Ng3 13. Bxf4>

<t1...Ng3 13... Nxh1>

=t1...Ng3 26

<t1a...Qe3 t1...Ng3 14. Qe3> !? ∞

<t1b...Ke2 t1...Ng3 14. Ke2> !?

# T2) 12... Bxe5

<t2...Bxe5 t...Nd7 12... Bxe5 13. d6+>

<t2...Bxe5 13... Kh8>

<t2...Bxe5 14. dxe5 Nxe5 15. Qc3>

<t2...Bxe5 15... cxd6> !

<t2...Bxe5 16. Nf7+>

<t2...Bxe5 16... Rxf7 17. Bxf7 Nf6 18. Bb3> ∞

=t2...Bxe5 35

# T3) 12... Nxe5

<t3...Nxe5 t...Nd7 12... Nxe5 13. dxe5 Bxe5 14. Bd2> ∞

=t3...Nxe5 27

T31) <t31...Bxb2 t3...Nxe5 14... Bxb2>

<t31...Bxb2 15. Rb1 Bf6>

<t31...Bxb2 16. Kd1> ∞

=t31...Bxb2 31

T32) <t32...Ng3 t3...Nxe5 14... Ng3 15. O-O-O>

<t32...Ng3 15... Nxh1 16. Rxh1> =/∞

=t32...Ng3 31

T321) <t321...Qd6 t32...Ng3 16... Qd6>

<t321...Qd6 17. Re1 Re8 18. a3>

<t321...Qd6 18... a5 19. Ne6>

<t321...Qd6 19... Bxe6 20. dxe6 Qxd3 21. Bxd3 Bd6 22. Bxf5> =

=t321...Qd6 43

T322) <t322...h6 t32...Ng3 16... h6 17. Bb4>


<t322...h6 17... hxg5 18. Be7> !=

<t322...h6 18... Qd7 19. d6+ Kg7 20. Qd5 cxd6 21. Bxf8+ Kxf8 22. Qg8+ Ke7 23. Qxg5+ Ke8 24. Qg8+> =

=t322...h6 47
`,
  `
<initial rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1>

<initial 1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4>

<initial 4... g4 5. Ne5>

<initial 5... d6> !

<initial 6. Nxg4 Nf6>

=initial 12

# A) 7. Nf2 ?!

<a.Nf2 initial 7. Nf2> ?!

<a.Nf2 7... Rg8>

<a.Nf2 8. d4 Bh6 9. Nc3 Nc6>

<a.Nf2 10. Bb5>

=a.Nf2 19

A1) <a1...Bd7 a.Nf2 10... Bd7>

<a1...Bd7 11. O-O>

<a1...Bd7 11... Qe7>

<a1...Bd7 12. Nd3>

<a1...Bd7 12... Nxd4>

<a1...Bd7 13. Bxd7+ Kxd7 14. Nxf4 Qe5> =+

=a1...Bd7 28

A2) <a2...a6 a.Nf2 10... a6>

<a2...a6 11. Bxc6+>

<a2...a6 11... bxc6 12. Qd3>

<a2...a6 12... Rxg2 13. Bxf4>

<a2...a6 13... Bxf4 14. Qf3 Rxf2 15. Qxf2 Nh5>

<a2...a6 16. Ne2> ?

<a2...a6 16... Bh6> -+

<a2...a6 17. Qf3 Ng7 18. Ng3 Rb8 19. b3 Bd7 20. Kf2 Qe7 21. Rae1 Kf8 22. e5>

<a2...a6 22... c5> ?!

<a2...a6 23. e6>

=a2...a6 45

# B) 7. Nxf6+

<b.Nxf6 initial 7. Nxf6 Qxf6>

<b.Nxf6 8. Nc3>

<b.Nxf6 8... Nc6>

=b.Nxf6 16

# B1) 9. d3

<b1.d3 b.Nxf6 9. d3>

<b1.d3 9... Be6> !

<b1.d3 10. Nd5> !? N

<b1.d3 10... Bxd5 11. exd5 Qe5+ 12. Be2>

<b1.d3 12... Nd4> !

<b1.d3 13. c3 Nxe2 14. Qxe2>

<b1.d3 14... Rg8>

<b1.d3 15. d4 Qxe2+ 16. Kxe2 Rxg2+ 17. Kf3 Rc2 18. Rb1 Bh6 19. Bxf4 Bxf4 20. Kxf4>

=b1.d3 39

# B2) 9. Bb5

<b2.Bb5 b.Nxf6 9. Bb5>

B21) <b21...a6 b2.Bb5 9... a6>

<b21...a6 10. Bxc6+>

<b21...a6 10... bxc6>

<b21...a6 11. Qf3 Rg8 12. d3 Bh6 13. Qf2 Rb8 14. Ne2>

<b21...a6 14... Rxb2>

<b21...a6 15. Bxb2 Qxb2 16. O-O Qxc2>

=b21...a6 32

B22) <b22...Kd8 b2.Bb5 9... Kd8>

<b22...Kd8 10. Bxc6>

<b22...Kd8 10... bxc6 11. Qf3>

<b22...Kd8 11... Rg8>

<b22...Kd8 12. d3 Bh6>

<b22...Kd8 13. Qf2>

<b22...Kd8 13... Rb8>

<b22...Kd8 14. Ne2>

<b22...Kd8 14... Rxb2>

<b22...Kd8 15. Bxb2 Qxb2 16. O-O>

<b22...Kd8 16... Qxc2 17. Nxf4>

<b22...Kd8 17... Qxf2+>

<b22...Kd8 18. Rxf2 Bg7>

<b22...Kd8 19. Rc1 Bd4 20. Rxc6 Rg4> ! <b22...Kd8 21. Nd5 Bb7 22. Rc4 Bxf2+ 23. Kxf2 Rxh4 24. Nxc7 Rh5>

=b22...Kd8 48

# B3) 9. Nd5

<b3.Nd5 b.Nxf6 9. Nd5>

<b3.Nd5 9... Qg6>

<b3.Nd5 10. d3>

<b3.Nd5 10... Qg3+ 11. Kd2>

<b3.Nd5 11... Nb4>

<b3.Nd5 12. Qf3>

<b3.Nd5 12... Qxf3 13. gxf3 Nxd5 14. exd5 Rg8> =

=b3.Nd5 28

# B4) 9. d4

<b4.d4 b.Nxf6 9. d4>

<b4.d4 9... Qxd4>

<b4.d4 10. Bxf4>

<b4.d4 10... Bg7>

<b4.d4 11. Qxd4 Nxd4>

<b4.d4 12. O-O-O>

<b4.d4 12... Bg4 13. Re1 Ne6 14. Bd2 Be5 15. Nd5 c6 16. Ne3 Rg8> ∞

=b4.d4 32
`
];
