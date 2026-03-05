import { useState, useEffect } from "react";

// ─── INLINE SVG DIAGRAMS ─────────────────────────────────────────────────────

const DNA_SVG = () => (
  <svg viewBox="0 0 320 400" width="100%" style={{maxWidth:300,display:"block",margin:"0 auto"}}>
    <defs>
      <linearGradient id="gA" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#e8c547"/><stop offset="100%" stopColor="#f4a261"/></linearGradient>
      <linearGradient id="gT" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7ec8e3"/><stop offset="100%" stopColor="#a8d8ff"/></linearGradient>
      <linearGradient id="gG" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#a8d8a8"/><stop offset="100%" stopColor="#5aaa5a"/></linearGradient>
      <linearGradient id="gC" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#c77dff"/><stop offset="100%" stopColor="#9a5adc"/></linearGradient>
    </defs>
    <text x="160" y="18" textAnchor="middle" fill="#aaa" fontSize="12" fontWeight="bold">DNA Double Helix Structure</text>
    <path d="M 65 30 C 45 65, 45 85, 65 120 C 85 155, 85 175, 65 210 C 45 245, 45 265, 65 300 C 85 335, 85 355, 65 390" fill="none" stroke="#555" strokeWidth="6" strokeLinecap="round"/>
    <path d="M 255 30 C 275 65, 275 85, 255 120 C 235 155, 235 175, 255 210 C 275 245, 275 265, 255 300 C 235 335, 235 355, 255 390" fill="none" stroke="#555" strokeWidth="6" strokeLinecap="round"/>
    {[
      {y:52,l:"A",r:"T",lc:"url(#gA)",rc:"url(#gT)"},
      {y:95,l:"G",r:"C",lc:"url(#gG)",rc:"url(#gC)"},
      {y:140,l:"T",r:"A",lc:"url(#gT)",rc:"url(#gA)"},
      {y:183,l:"C",r:"G",lc:"url(#gC)",rc:"url(#gG)"},
      {y:228,l:"A",r:"T",lc:"url(#gA)",rc:"url(#gT)"},
      {y:271,l:"G",r:"C",lc:"url(#gG)",rc:"url(#gC)"},
      {y:316,l:"T",r:"A",lc:"url(#gT)",rc:"url(#gA)"},
      {y:359,l:"C",r:"G",lc:"url(#gC)",rc:"url(#gG)"},
    ].map(({y,l,r,lc,rc},i)=>(
      <g key={i}>
        <line x1="80" y1={y} x2="240" y2={y} stroke="#2a2a3a" strokeWidth="2" strokeDasharray="5,3"/>
        <rect x="70" y={y-13} width="48" height="26" rx="7" fill={lc}/>
        <text x="94" y={y+5} textAnchor="middle" fill="#000" fontWeight="bold" fontSize="13">{l}</text>
        <rect x="202" y={y-13} width="48" height="26" rx="7" fill={rc}/>
        <text x="226" y={y+5} textAnchor="middle" fill="#000" fontWeight="bold" fontSize="13">{r}</text>
      </g>
    ))}
    <text x="30" y="215" fill="#888" fontSize="9" transform="rotate(-90,30,215)">5' → 3'</text>
    <text x="295" y="215" fill="#888" fontSize="9" transform="rotate(90,295,215)">3' ← 5'</text>
    <text x="160" y="395" textAnchor="middle" fill="#555" fontSize="9">Antiparallel strands  |  A-T, G-C base pairing</text>
  </svg>
);

const CELL_SVG = () => (
  <svg viewBox="0 0 380 270" width="100%" style={{maxWidth:380,display:"block",margin:"0 auto"}}>
    <text x="190" y="16" textAnchor="middle" fill="#aaa" fontSize="12" fontWeight="bold">Eukaryotic Animal Cell</text>
    <ellipse cx="190" cy="145" rx="172" ry="115" fill="#060f06" stroke="#5aaa5a" strokeWidth="2.5"/>
    <ellipse cx="190" cy="132" rx="62" ry="50" fill="#060612" stroke="#7ec8e3" strokeWidth="2.5"/>
    <text x="190" y="126" textAnchor="middle" fill="#7ec8e3" fontSize="10" fontWeight="bold">Nucleus</text>
    <text x="190" y="140" textAnchor="middle" fill="#5a7a9a" fontSize="8">(DNA / Chromosomes)</text>
    <ellipse cx="72" cy="192" rx="34" ry="17" fill="#0f0f06" stroke="#e8c547" strokeWidth="2"/>
    <path d="M 52 192 Q 62 183, 72 192 Q 82 201, 92 192" fill="none" stroke="#e8c547" strokeWidth="1.5"/>
    <text x="72" y="218" textAnchor="middle" fill="#e8c547" fontSize="9" fontWeight="bold">Mitochondria</text>
    <text x="72" y="229" textAnchor="middle" fill="#9a8030" fontSize="8">ATP + mtDNA</text>
    {[[292,82],[310,97],[293,112],[272,92],[308,112]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r="6" fill="#f4a261" stroke="#b06020" strokeWidth="1.2"/>
    ))}
    <text x="298" y="130" textAnchor="middle" fill="#f4a261" fontSize="9" fontWeight="bold">Ribosomes</text>
    <text x="298" y="141" textAnchor="middle" fill="#9a6020" fontSize="8">Protein synthesis</text>
    <path d="M 128 198 Q 143 183, 153 198 Q 163 213, 173 198 Q 183 183, 193 198" fill="none" stroke="#c77dff" strokeWidth="2"/>
    <text x="160" y="222" textAnchor="middle" fill="#c77dff" fontSize="9" fontWeight="bold">Endoplasmic Reticulum</text>
    <text x="320" y="165" fill="#1e3a1e" fontSize="9" textAnchor="middle">Cytoplasm</text>
    <text x="190" y="263" textAnchor="middle" fill="#3a6a3a" fontSize="9">Cell membrane (outer boundary)</text>
  </svg>
);

const PROTEIN_SVG = () => (
  <svg viewBox="0 0 420 260" width="100%" style={{maxWidth:420,display:"block",margin:"0 auto"}}>
    <text x="210" y="16" textAnchor="middle" fill="#aaa" fontSize="12" fontWeight="bold">Protein Synthesis: Transcription → Translation</text>
    <rect x="10" y="28" width="158" height="110" rx="12" fill="#080812" stroke="#7ec8e3" strokeWidth="2"/>
    <text x="89" y="46" textAnchor="middle" fill="#7ec8e3" fontSize="10" fontWeight="bold">NUCLEUS</text>
    <rect x="22" y="52" width="134" height="22" rx="5" fill="#111128" stroke="#5a7a9a" strokeWidth="1"/>
    <text x="89" y="67" textAnchor="middle" fill="#7ec8e3" fontSize="9">DNA template strand</text>
    <line x1="89" y1="74" x2="89" y2="95" stroke="#e8c547" strokeWidth="2"/>
    <polygon points="84,94 94,94 89,103" fill="#e8c547"/>
    <text x="130" y="87" fill="#e8c547" fontSize="8">transcribe</text>
    <rect x="22" y="88" width="134" height="22" rx="5" fill="#0a1a0a" stroke="#a8d8a8" strokeWidth="1"/>
    <text x="89" y="103" textAnchor="middle" fill="#a8d8a8" fontSize="9">mRNA built</text>
    <text x="89" y="130" textAnchor="middle" fill="#666" fontSize="8" fontStyle="italic">TRANSCRIPTION</text>
    <line x1="168" y1="99" x2="228" y2="99" stroke="#a8d8a8" strokeWidth="2.5"/>
    <polygon points="225,94 236,99 225,104" fill="#a8d8a8"/>
    <text x="198" y="91" textAnchor="middle" fill="#a8d8a8" fontSize="8">mRNA exits</text>
    <ellipse cx="295" cy="148" rx="52" ry="35" fill="#100a06" stroke="#f4a261" strokeWidth="2.5"/>
    <text x="295" y="143" textAnchor="middle" fill="#f4a261" fontSize="10" fontWeight="bold">Ribosome</text>
    <text x="295" y="157" textAnchor="middle" fill="#8a5010" fontSize="8">reads mRNA codons</text>
    <line x1="236" y1="99" x2="252" y2="130" stroke="#a8d8a8" strokeWidth="1.5" strokeDasharray="4,3"/>
    {[[-30,-5],[5,-28],[42,-5]].map(([dx,dy],i)=>(
      <g key={i}>
        <line x1={295+dx} y1={148+dy-42} x2={295+dx} y2={148+dy-18} stroke="#c77dff" strokeWidth="1.5"/>
        <polygon points={`${295+dx-4},${148+dy-18} ${295+dx+4},${148+dy-18} ${295+dx},${148+dy-10}`} fill="#c77dff"/>
        <text x={295+dx} y={148+dy-47} textAnchor="middle" fill="#c77dff" fontSize="8">tRNA</text>
      </g>
    ))}
    <text x="295" y="200" textAnchor="middle" fill="#ff6b6b" fontSize="8" fontWeight="bold">Polypeptide chain →</text>
    {[0,1,2,3,4].map(i=>(
      <circle key={i} cx={253+i*19} cy={215} r="8" fill="#ff6b6b" stroke="#aa3333" strokeWidth="1.5"/>
    ))}
    <text x="295" y="240" textAnchor="middle" fill="#666" fontSize="8" fontStyle="italic">TRANSLATION</text>
    <text x="295" y="253" textAnchor="middle" fill="#444" fontSize="8">codon (3 bases) → 1 amino acid → chain → protein</text>
  </svg>
);

const MITOSIS_MEIOSIS_SVG = () => (
  <svg viewBox="0 0 400 295" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="17" textAnchor="middle" fill="#aaa" fontSize="12" fontWeight="bold">Mitosis vs Meiosis</text>
    <text x="100" y="36" textAnchor="middle" fill="#a8d8a8" fontSize="11" fontWeight="bold">MITOSIS</text>
    <ellipse cx="100" cy="66" rx="36" ry="21" fill="#0a180a" stroke="#a8d8a8" strokeWidth="2"/>
    <text x="100" y="64" textAnchor="middle" fill="#a8d8a8" fontSize="9">2n = 46</text>
    <text x="100" y="77" textAnchor="middle" fill="#5a8a5a" fontSize="8">Parent cell</text>
    <line x1="100" y1="88" x2="100" y2="108" stroke="#a8d8a8" strokeWidth="1.5"/>
    <polygon points="95,108 105,108 100,116" fill="#a8d8a8"/>
    <text x="140" y="102" fill="#555" fontSize="8">1 division</text>
    <ellipse cx="68" cy="145" rx="28" ry="17" fill="#0a180a" stroke="#a8d8a8" strokeWidth="1.5"/>
    <ellipse cx="132" cy="145" rx="28" ry="17" fill="#0a180a" stroke="#a8d8a8" strokeWidth="1.5"/>
    <text x="68" y="148" textAnchor="middle" fill="#a8d8a8" fontSize="9">2n=46</text>
    <text x="132" y="148" textAnchor="middle" fill="#a8d8a8" fontSize="9">2n=46</text>
    <line x1="100" y1="116" x2="68" y2="128" stroke="#a8d8a8" strokeWidth="1.5"/>
    <line x1="100" y1="116" x2="132" y2="128" stroke="#a8d8a8" strokeWidth="1.5"/>
    <text x="100" y="177" textAnchor="middle" fill="#a8d8a8" fontSize="9" fontWeight="bold">2 identical diploid cells</text>
    <text x="100" y="190" textAnchor="middle" fill="#4a7a4a" fontSize="8">Growth · Repair</text>
    <text x="100" y="202" textAnchor="middle" fill="#4a7a4a" fontSize="8">No crossing-over</text>
    <line x1="200" y1="26" x2="200" y2="290" stroke="#1e1e28" strokeWidth="1.5" strokeDasharray="5,4"/>
    <text x="300" y="36" textAnchor="middle" fill="#c77dff" fontSize="11" fontWeight="bold">MEIOSIS</text>
    <ellipse cx="300" cy="66" rx="36" ry="21" fill="#120a18" stroke="#c77dff" strokeWidth="2"/>
    <text x="300" y="64" textAnchor="middle" fill="#c77dff" fontSize="9">2n = 46</text>
    <text x="300" y="77" textAnchor="middle" fill="#8a5a9a" fontSize="8">Parent cell</text>
    <line x1="300" y1="88" x2="300" y2="103" stroke="#c77dff" strokeWidth="1.5"/>
    <polygon points="295,102 305,102 300,110" fill="#c77dff"/>
    <text x="342" y="97" fill="#555" fontSize="8">Meiosis I</text>
    <ellipse cx="270" cy="130" rx="24" ry="15" fill="#120a18" stroke="#c77dff" strokeWidth="1.5"/>
    <ellipse cx="330" cy="130" rx="24" ry="15" fill="#120a18" stroke="#c77dff" strokeWidth="1.5"/>
    <text x="270" y="133" textAnchor="middle" fill="#c77dff" fontSize="8">n=23</text>
    <text x="330" y="133" textAnchor="middle" fill="#c77dff" fontSize="8">n=23</text>
    <line x1="300" y1="110" x2="270" y2="115" stroke="#c77dff" strokeWidth="1.5"/>
    <line x1="300" y1="110" x2="330" y2="115" stroke="#c77dff" strokeWidth="1.5"/>
    <line x1="270" y1="145" x2="270" y2="158" stroke="#c77dff" strokeWidth="1.5"/>
    <polygon points="265,158 275,158 270,165" fill="#c77dff"/>
    <line x1="330" y1="145" x2="330" y2="158" stroke="#c77dff" strokeWidth="1.5"/>
    <polygon points="325,158 335,158 330,165" fill="#c77dff"/>
    <text x="300" y="155" textAnchor="middle" fill="#555" fontSize="8">Meiosis II</text>
    {[252,274,318,340].map((cx,i)=>(
      <ellipse key={i} cx={cx} cy={185} rx="19" ry="12" fill="#120a18" stroke="#c77dff" strokeWidth="1.2"/>
    ))}
    {[252,274,318,340].map((cx,i)=>(
      <text key={i} x={cx} y={188} textAnchor="middle" fill="#c77dff" fontSize="7">n=23</text>
    ))}
    <line x1="270" y1="165" x2="252" y2="173" stroke="#c77dff" strokeWidth="1"/>
    <line x1="270" y1="165" x2="274" y2="173" stroke="#c77dff" strokeWidth="1"/>
    <line x1="330" y1="165" x2="318" y2="173" stroke="#c77dff" strokeWidth="1"/>
    <line x1="330" y1="165" x2="340" y2="173" stroke="#c77dff" strokeWidth="1"/>
    <text x="300" y="213" textAnchor="middle" fill="#c77dff" fontSize="9" fontWeight="bold">4 unique haploid cells</text>
    <text x="300" y="226" textAnchor="middle" fill="#7a4a8a" fontSize="8">Gametes (sperm / eggs)</text>
    <text x="300" y="238" textAnchor="middle" fill="#7a4a8a" fontSize="8">Crossing-over occurs ✓</text>
  </svg>
);

const PUNNETT_SVG = () => (
  <svg viewBox="0 0 300 210" width="100%" style={{maxWidth:300,display:"block",margin:"0 auto"}}>
    <text x="150" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Punnett Square — Tt × Tt cross</text>
    <text x="115" y="42" textAnchor="middle" fill="#e8c547" fontSize="17" fontWeight="bold">T</text>
    <text x="175" y="42" textAnchor="middle" fill="#e8c547" fontSize="17" fontWeight="bold">t</text>
    <text x="52" y="92" textAnchor="middle" fill="#e8c547" fontSize="17" fontWeight="bold">T</text>
    <text x="52" y="158" textAnchor="middle" fill="#e8c547" fontSize="17" fontWeight="bold">t</text>
    {[["TT","#1a3a0a","#a8d8a8",80,55],["Tt","#1a3a0a","#a8d8a8",140,55],["Tt","#1a3a0a","#a8d8a8",80,120],["tt","#3a0a0a","#ff6b6b",140,120]].map(([g,bg,fc,x,y])=>(
      <g key={`${x}-${y}`}>
        <rect x={x} y={y} width="58" height="55" rx="7" fill={bg} stroke={fc} strokeWidth="1.5"/>
        <text x={x+29} y={y+32} textAnchor="middle" fill={fc} fontSize="19" fontWeight="bold">{g}</text>
      </g>
    ))}
    <text x="150" y="192" textAnchor="middle" fill="#a8d8a8" fontSize="9">TT,Tt,Tt = Dominant phenotype (Tall)</text>
    <text x="150" y="205" textAnchor="middle" fill="#ff6b6b" fontSize="9">tt = Recessive (Short) → 3:1 ratio</text>
  </svg>
);

const SCALA_SVG = () => (
  <svg viewBox="0 0 220 260" width="100%" style={{maxWidth:220,display:"block",margin:"0 auto"}}>
    <text x="110" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Scala Naturae (Aristotle)</text>
    <text x="110" y="28" textAnchor="middle" fill="#555" fontSize="9">Great Chain of Being</text>
    {[
      ["⭐ God / Divine","#fff",45,0],
      ["👼 Angels","#e8c547",73,4],
      ["🧍 Humans","#f4a261",101,8],
      ["🐾 Animals","#a8d8a8",129,12],
      ["🌿 Plants","#7ec8e3",157,16],
      ["🪨 Minerals","#888",185,20],
    ].map(([label,color,y,shrink])=>(
      <g key={y}>
        <rect x={20+shrink} y={y-14} width={180-shrink*2} height="22" rx="5" fill={`${color}15`} stroke={color} strokeWidth="1.5"/>
        <text x="110" y={y+1} textAnchor="middle" fill={color} fontSize="10" fontWeight="bold">{label}</text>
      </g>
    ))}
    <text x="110" y="215" textAnchor="middle" fill="#555" fontSize="8">Fixed hierarchy — implied no change possible</text>
    <text x="110" y="228" textAnchor="middle" fill="#444" fontSize="8">Aristotle ~350 BCE → dominant until Renaissance</text>
  </svg>
);

const SELECTION_SVG = () => (
  <svg viewBox="0 0 400 215" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Industrial Melanism — Directional Selection</text>
    <text x="68" y="38" textAnchor="middle" fill="#888" fontSize="10">Pre-industrial</text>
    {[18,38,58,78,98].map((x,i)=>(<ellipse key={i} cx={x} cy={65} rx="8" ry="5" fill="#d0d0d0" stroke="#aaa" strokeWidth="1"/>))}
    {[118].map((x,i)=>(<ellipse key={i} cx={x} cy={65} rx="8" ry="5" fill="#2a2a2a" stroke="#666" strokeWidth="1"/>))}
    <text x="68" y="85" textAnchor="middle" fill="#888" fontSize="8">5 light : 1 dark</text>
    <rect x="155" y="45" width="90" height="40" rx="8" fill="#1a1208" stroke="#e8c547" strokeWidth="1.5"/>
    <text x="200" y="62" textAnchor="middle" fill="#e8c547" fontSize="8">SOOT darkens</text>
    <text x="200" y="74" textAnchor="middle" fill="#e8c547" fontSize="8">tree bark 🏭</text>
    <line x1="245" y1="65" x2="268" y2="65" stroke="#e8c547" strokeWidth="2"/>
    <polygon points="265,60 275,65 265,70" fill="#e8c547"/>
    <text x="332" y="38" textAnchor="middle" fill="#888" fontSize="10">Post-industrial</text>
    {[288].map((x,i)=>(<ellipse key={i} cx={x} cy={65} rx="8" ry="5" fill="#d0d0d0" stroke="#aaa" strokeWidth="1"/>))}
    {[308,328,348,368,388].map((x,i)=>(<ellipse key={i} cx={x} cy={65} rx="8" ry="5" fill="#2a2a2a" stroke="#666" strokeWidth="1"/>))}
    <text x="338" y="85" textAnchor="middle" fill="#888" fontSize="8">1 light : 5 dark</text>
    <rect x="10" y="98" width="380" height="108" rx="10" fill="#0d0d0a" stroke="#2a2a18"/>
    <text x="200" y="117" textAnchor="middle" fill="#e8c547" fontSize="10" fontWeight="bold">Why? — Directional Selection</text>
    {[
      ["Light moths on dark bark → VISIBLE to birds → eaten → frequency drops","#ccc",134],
      ["Dark moths on dark bark → CAMOUFLAGED → survive → reproduce more","#888",151],
      ["Dark allele increases in population each generation","#a8d8a8",168],
      ["After clean air acts (1950s+): light moths rebounded → evolution REVERSED","#7ec8e3",185],
      ["This is pre-existing heritable variation + changed selection pressure","#666",202],
    ].map(([t,c,y])=>(
      <text key={y} x="200" y={y} textAnchor="middle" fill={c} fontSize="9">{t}</text>
    ))}
  </svg>
);

const KARYOTYPE_SVG = () => (
  <svg viewBox="0 0 400 195" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Human Karyotype — 46 Chromosomes (23 pairs)</text>
    {Array.from({length:22},(_,i)=>{
      const col=i%11; const row=Math.floor(i/11);
      const x=15+col*33; const y=30+row*68;
      return (
        <g key={i}>
          <rect x={x} y={y} width="10" height="28" rx="3" fill="#c77dff" stroke="#9a5adc" strokeWidth="1"/>
          <rect x={x-2} y={y+11} width="14" height="3" rx="1" fill="#9a5adc"/>
          <rect x={x+14} y={y} width="10" height="28" rx="3" fill="#c77dff" stroke="#9a5adc" strokeWidth="1"/>
          <rect x={x+12} y={y+11} width="14" height="3" rx="1" fill="#9a5adc"/>
          <text x={x+12} y={y+36} textAnchor="middle" fill="#666" fontSize="7">{i+1}</text>
        </g>
      );
    })}
    <g>
      <rect x="354" y="30" width="10" height="28" rx="3" fill="#7ec8e3" stroke="#5aaa9a" strokeWidth="1"/>
      <rect x="352" y="41" width="14" height="3" rx="1" fill="#5aaa9a"/>
      <rect x="372" y="37" width="10" height="20" rx="3" fill="#f4a261" stroke="#c07040" strokeWidth="1"/>
      <rect x="370" y="46" width="14" height="3" rx="1" fill="#c07040"/>
      <text x="369" y="66" textAnchor="middle" fill="#7ec8e3" fontSize="7">XY</text>
    </g>
    <text x="185" y="165" textAnchor="middle" fill="#666" fontSize="9">Autosomes: pairs 1–22 (same in ♀ and ♂)</text>
    <text x="369" y="175" textAnchor="middle" fill="#7ec8e3" fontSize="8">Sex chr.</text>
    <text x="200" y="180" textAnchor="middle" fill="#555" fontSize="8">Female = XX  |  Male = XY  |  Each pair = 1 from mom + 1 from dad</text>
  </svg>
);

const CROSSING_SVG = () => (
  <svg viewBox="0 0 380 195" width="100%" style={{maxWidth:380,display:"block",margin:"0 auto"}}>
    <text x="190" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Crossing-Over (Recombination) — Meiosis I</text>
    <text x="88" y="34" textAnchor="middle" fill="#666" fontSize="9">Before</text>
    <rect x="63" y="40" width="18" height="96" rx="6" fill="#7ec8e3" stroke="#5aaa9a" strokeWidth="1.5"/>
    {["A","B","C","D"].map((l,i)=>(<text key={i} x="72" y={58+i*22} textAnchor="middle" fill="#000" fontSize="9" fontWeight="bold">{l}</text>))}
    <rect x="97" y="40" width="18" height="96" rx="6" fill="#f4a261" stroke="#c07040" strokeWidth="1.5"/>
    {["a","b","c","d"].map((l,i)=>(<text key={i} x="106" y={58+i*22} textAnchor="middle" fill="#000" fontSize="9" fontWeight="bold">{l}</text>))}
    <text x="72" y="150" textAnchor="middle" fill="#7ec8e3" fontSize="8">Maternal</text>
    <text x="106" y="150" textAnchor="middle" fill="#f4a261" fontSize="8">Paternal</text>
    <text x="190" y="75" textAnchor="middle" fill="#a8d8a8" fontSize="9" fontWeight="bold">Crossing-over</text>
    <text x="190" y="89" textAnchor="middle" fill="#a8d8a8" fontSize="9">⟹ segments swap</text>
    <text x="190" y="107" textAnchor="middle" fill="#555" fontSize="8">Homologs pair up</text>
    <text x="190" y="119" textAnchor="middle" fill="#555" fontSize="8">and exchange DNA</text>
    <text x="295" y="34" textAnchor="middle" fill="#666" fontSize="9">After (recombinant)</text>
    <rect x="266" y="40" width="18" height="52" rx="6" fill="#7ec8e3" stroke="#5aaa9a" strokeWidth="1.5"/>
    <rect x="266" y="92" width="18" height="44" rx="6" fill="#f4a261" stroke="#c07040" strokeWidth="1.5"/>
    {["A","B"].map((l,i)=>(<text key={i} x="275" y={58+i*22} textAnchor="middle" fill="#000" fontSize="9" fontWeight="bold">{l}</text>))}
    {["c","d"].map((l,i)=>(<text key={i} x="275" y={104+i*22} textAnchor="middle" fill="#000" fontSize="9" fontWeight="bold">{l}</text>))}
    <rect x="306" y="40" width="18" height="52" rx="6" fill="#f4a261" stroke="#c07040" strokeWidth="1.5"/>
    <rect x="306" y="92" width="18" height="44" rx="6" fill="#7ec8e3" stroke="#5aaa9a" strokeWidth="1.5"/>
    {["a","b"].map((l,i)=>(<text key={i} x="315" y={58+i*22} textAnchor="middle" fill="#000" fontSize="9" fontWeight="bold">{l}</text>))}
    {["C","D"].map((l,i)=>(<text key={i} x="315" y={104+i*22} textAnchor="middle" fill="#000" fontSize="9" fontWeight="bold">{l}</text>))}
    <text x="295" y="150" textAnchor="middle" fill="#aaa" fontSize="8">Both mixed!</text>
    <text x="295" y="163" textAnchor="middle" fill="#a8d8a8" fontSize="8">New allele combos → genetic diversity</text>
    <text x="295" y="176" textAnchor="middle" fill="#555" fontSize="8">Why siblings are genetically unique</text>
  </svg>
);

const SUBFIELDS_SVG = () => (
  <svg viewBox="0 0 400 230" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="16" textAnchor="middle" fill="#aaa" fontSize="12" fontWeight="bold">The Four Subfields of Anthropology</text>
    {/* Center circle */}
    <circle cx="200" cy="120" r="38" fill="#120f06" stroke="#e8c547" strokeWidth="2.5"/>
    <text x="200" y="115" textAnchor="middle" fill="#e8c547" fontSize="10" fontWeight="bold">Anthro-</text>
    <text x="200" y="129" textAnchor="middle" fill="#e8c547" fontSize="10" fontWeight="bold">pology</text>
    {/* Four quadrant boxes */}
    {[
      {label:"Biological /\nPhysical Anthro",sub:"Evolution · Fossils\nGenetics · Primates",cx:60,cy:60,color:"#e8c547",lx:60,ly:52},
      {label:"Cultural\nAnthropology",sub:"Cultures · Societies\nEthnography",cx:340,cy:60,color:"#7ec8e3",lx:340,ly:52},
      {label:"Archaeology",sub:"Material remains\nPast cultures",cx:60,cy:180,color:"#a8d8a8",lx:60,ly:172},
      {label:"Linguistics",sub:"Language · Structure\nCognition",cx:340,cy:180,color:"#f4a261",lx:340,ly:172},
    ].map(({label,sub,cx,cy,color})=>{
      const x=cx<200?10:cx-110; const y=cy<120?28:cy-32; const w=100;
      return (
        <g key={label}>
          <rect x={x} y={y} width={w} height={50} rx="9" fill={`${color}18`} stroke={color} strokeWidth="1.8"/>
          {label.split("\n").map((l,i)=>(
            <text key={i} x={x+w/2} y={y+14+i*13} textAnchor="middle" fill={color} fontSize="9" fontWeight="bold">{l}</text>
          ))}
          {sub.split("\n").map((s,i)=>(
            <text key={i} x={x+w/2} y={y+32+i*11} textAnchor="middle" fill={`${color}aa`} fontSize="7.5">{s}</text>
          ))}
          <line x1={cx<200?x+w:x} y1={cy<120?y+50:y} x2={cx<200?162:238} y2={cy<120?82:158} stroke={color} strokeWidth="1.2" strokeDasharray="4,3" opacity="0.6"/>
        </g>
      );
    })}
  </svg>
);

const FINCHES_SVG = () => (
  <svg viewBox="0 0 400 210" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="15" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Grants' Finches — Natural Selection in Action</text>
    <rect x="8" y="24" width="180" height="85" rx="10" fill="#080f08" stroke="#a8d8a8" strokeWidth="1.5"/>
    <text x="98" y="40" textAnchor="middle" fill="#a8d8a8" fontSize="9" fontWeight="bold">1976 — Normal year</text>
    <text x="98" y="54" textAnchor="middle" fill="#6a8a6a" fontSize="8">Many small soft seeds available</text>
    {[20,44,68,92,116,140].map((x,i)=>(
      <ellipse key={i} cx={x+10} cy={82} rx={i<4?5:8} ry="4" fill={i<4?"#c8e8c8":"#a8d8a8"} stroke={i<4?"#5a8a5a":"#3a6a3a"} strokeWidth="1"/>
    ))}
    <text x="98" y="100" textAnchor="middle" fill="#5a7a5a" fontSize="7.5">Mix of small (light) and large (dark) beaks</text>
    <rect x="212" y="24" width="180" height="85" rx="10" fill="#0f0806" stroke="#e8c547" strokeWidth="1.5"/>
    <text x="302" y="40" textAnchor="middle" fill="#e8c547" fontSize="9" fontWeight="bold">1977 — Severe Drought</text>
    <text x="302" y="54" textAnchor="middle" fill="#8a7030" fontSize="8">Only large, hard seeds remain</text>
    {[220,260,300,340,370].map((x,i)=>(
      <ellipse key={i} cx={x+8} cy={82} rx={i<2?5:8} ry="4" fill={i<2?"#c8e8c8":"#a8d8a8"} stroke={i<2?"#5a8a5a":"#3a6a3a"} strokeWidth="1" opacity={i<2?0.3:1}/>
    ))}
    <text x="302" y="100" textAnchor="middle" fill="#8a7030" fontSize="7.5">Small-beaked birds died → large beaks dominate</text>
    <rect x="60" y="118" width="280" height="85" rx="10" fill="#0a080a" stroke="#c77dff" strokeWidth="1.5"/>
    <text x="200" y="134" textAnchor="middle" fill="#c77dff" fontSize="9" fontWeight="bold">Result: Mean beak size shifted measurably in ONE generation</text>
    {[
      ["✓ Pre-existing variation in beak size","#a8d8a8",150],
      ["✓ Drought = selection pressure (changed environment)","#e8c547",163],
      ["✓ Large-beak alleles heritable → passed to offspring","#c77dff",176],
      ["✓ Evolution is fast, measurable, and reversible","#f4a261",189],
    ].map(([t,c,y])=>(
      <text key={y} x="200" y={y} textAnchor="middle" fill={c} fontSize="8">{t}</text>
    ))}
  </svg>
);

const ANAGENESIS_SVG = () => (
  <svg viewBox="0 0 400 175" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="15" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Anagenesis vs. Cladogenesis</text>
    {/* Anagenesis */}
    <text x="95" y="34" textAnchor="middle" fill="#7ec8e3" fontSize="10" fontWeight="bold">Anagenesis (linear)</text>
    <ellipse cx="25" cy="75" rx="20" ry="14" fill="#0a1218" stroke="#7ec8e3" strokeWidth="1.8"/>
    <text x="25" y="79" textAnchor="middle" fill="#7ec8e3" fontSize="8">Sp. A</text>
    <line x1="45" y1="75" x2="75" y2="75" stroke="#7ec8e3" strokeWidth="2"/>
    <polygon points="72,70 82,75 72,80" fill="#7ec8e3"/>
    <ellipse cx="105" cy="75" rx="20" ry="14" fill="#0a1218" stroke="#7ec8e3" strokeWidth="1.8"/>
    <text x="105" y="79" textAnchor="middle" fill="#7ec8e3" fontSize="8">Sp. B</text>
    <line x1="125" y1="75" x2="155" y2="75" stroke="#7ec8e3" strokeWidth="2"/>
    <polygon points="152,70 162,75 152,80" fill="#7ec8e3"/>
    <ellipse cx="182" cy="75" rx="20" ry="14" fill="#0a1218" stroke="#7ec8e3" strokeWidth="1.8"/>
    <text x="182" y="79" textAnchor="middle" fill="#7ec8e3" fontSize="8">Sp. C</text>
    <text x="95" y="105" textAnchor="middle" fill="#4a7a9a" fontSize="8">One lineage transforms over time</text>
    <text x="95" y="117" textAnchor="middle" fill="#3a5a7a" fontSize="7.5">No branching · No new species added</text>
    {/* Cladogenesis */}
    <text x="305" y="34" textAnchor="middle" fill="#a8d8a8" fontSize="10" fontWeight="bold">Cladogenesis (branching)</text>
    <ellipse cx="305" cy="50" rx="20" ry="12" fill="#0a180a" stroke="#a8d8a8" strokeWidth="1.8"/>
    <text x="305" y="54" textAnchor="middle" fill="#a8d8a8" fontSize="8">Ancestor</text>
    <line x1="305" y1="62" x2="305" y2="78" stroke="#a8d8a8" strokeWidth="1.8"/>
    <line x1="305" y1="78" x2="268" y2="95" stroke="#a8d8a8" strokeWidth="1.8"/>
    <line x1="305" y1="78" x2="342" y2="95" stroke="#a8d8a8" strokeWidth="1.8"/>
    <ellipse cx="260" cy="110" rx="22" ry="13" fill="#0a180a" stroke="#a8d8a8" strokeWidth="1.8"/>
    <text x="260" y="114" textAnchor="middle" fill="#a8d8a8" fontSize="8">Sp. 1</text>
    <ellipse cx="350" cy="110" rx="22" ry="13" fill="#0a180a" stroke="#a8d8a8" strokeWidth="1.8"/>
    <text x="350" y="114" textAnchor="middle" fill="#a8d8a8" fontSize="8">Sp. 2</text>
    <line x1="260" y1="123" x2="247" y2="140" stroke="#a8d8a8" strokeWidth="1.5"/>
    <line x1="260" y1="123" x2="275" y2="140" stroke="#a8d8a8" strokeWidth="1.5"/>
    <ellipse cx="240" cy="153" rx="18" ry="11" fill="#0a180a" stroke="#a8d8a8" strokeWidth="1.5"/>
    <text x="240" y="157" textAnchor="middle" fill="#a8d8a8" fontSize="7">Sp. 1a</text>
    <ellipse cx="278" cy="153" rx="18" ry="11" fill="#0a180a" stroke="#a8d8a8" strokeWidth="1.5"/>
    <text x="278" y="157" textAnchor="middle" fill="#a8d8a8" fontSize="7">Sp. 1b</text>
    <text x="305" y="172" textAnchor="middle" fill="#4a8a4a" fontSize="7.5">Branching → biodiversity increases</text>
  </svg>
);

const MECHANISMS_SVG = () => (
  <svg viewBox="0 0 400 220" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Four Mechanisms of Evolutionary Change</text>
    <circle cx="200" cy="112" r="34" fill="#0d0d18" stroke="#9ad1ff" strokeWidth="2"/>
    <text x="200" y="108" textAnchor="middle" fill="#9ad1ff" fontSize="9" fontWeight="bold">Allele</text>
    <text x="200" y="121" textAnchor="middle" fill="#9ad1ff" fontSize="9" fontWeight="bold">Frequencies</text>

    {[{x:90,y:58,t:"Natural Selection",c:"#a8d8a8",s:"non-random"},{x:310,y:58,t:"Mutation",c:"#f4a261",s:"new alleles"},{x:90,y:168,t:"Gene Flow",c:"#7ec8e3",s:"migration"},{x:310,y:168,t:"Genetic Drift",c:"#c77dff",s:"random"}].map(({x,y,t,c,s})=>(
      <g key={t}>
        <rect x={x-64} y={y-22} width="128" height="46" rx="8" fill={`${c}18`} stroke={c} strokeWidth="1.6"/>
        <text x={x} y={y-3} textAnchor="middle" fill={c} fontSize="9" fontWeight="bold">{t}</text>
        <text x={x} y={y+10} textAnchor="middle" fill={`${c}bb`} fontSize="7.5">{s}</text>
      </g>
    ))}

    <line x1="150" y1="91" x2="118" y2="71" stroke="#a8d8a8" strokeWidth="1.5"/>
    <line x1="250" y1="91" x2="282" y2="71" stroke="#f4a261" strokeWidth="1.5"/>
    <line x1="150" y1="133" x2="118" y2="153" stroke="#7ec8e3" strokeWidth="1.5"/>
    <line x1="250" y1="133" x2="282" y2="153" stroke="#c77dff" strokeWidth="1.5"/>

    <text x="200" y="205" textAnchor="middle" fill="#666" fontSize="8">Selection drives adaptation; mutation/drift/flow change variation and frequencies</text>
  </svg>
);

const LINKAGE_LD_SVG = () => (
  <svg viewBox="0 0 400 220" width="100%" style={{maxWidth:400,display:"block",margin:"0 auto"}}>
    <text x="200" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Independent Assortment, Linkage & LD</text>

    <text x="90" y="34" textAnchor="middle" fill="#7ec8e3" fontSize="9" fontWeight="bold">Unlinked loci</text>
    <rect x="56" y="40" width="14" height="68" rx="5" fill="#7ec8e3"/>
    <rect x="112" y="40" width="14" height="68" rx="5" fill="#f4a261"/>
    <circle cx="63" cy="55" r="6" fill="#111" stroke="#a8d8a8" strokeWidth="1.5"/>
    <circle cx="119" cy="85" r="6" fill="#111" stroke="#c77dff" strokeWidth="1.5"/>
    <text x="90" y="122" textAnchor="middle" fill="#666" fontSize="7.5">assort independently</text>

    <text x="300" y="34" textAnchor="middle" fill="#e8c547" fontSize="9" fontWeight="bold">Linked loci + recombination</text>
    <rect x="266" y="40" width="14" height="68" rx="5" fill="#e8c547"/>
    <rect x="284" y="40" width="14" height="68" rx="5" fill="#e8c547"/>
    <circle cx="273" cy="58" r="6" fill="#111" stroke="#a8d8a8" strokeWidth="1.5"/>
    <circle cx="291" cy="84" r="6" fill="#111" stroke="#c77dff" strokeWidth="1.5"/>
    <path d="M 273 65 C 268 84, 296 86, 291 101" fill="none" stroke="#ff6b6b" strokeWidth="1.5" strokeDasharray="4,3"/>
    <text x="300" y="122" textAnchor="middle" fill="#666" fontSize="7.5">crossing-over can break linkage</text>

    <rect x="18" y="136" width="364" height="72" rx="9" fill="#0c0c1a" stroke="#1d1d30"/>
    <text x="200" y="154" textAnchor="middle" fill="#c77dff" fontSize="9" fontWeight="bold">Linkage Disequilibrium (LD)</text>
    <text x="200" y="170" textAnchor="middle" fill="#aaa" fontSize="8">Non-random allele combinations (A with B more than expected by chance)</text>
    <text x="200" y="184" textAnchor="middle" fill="#7ec8e3" fontSize="8">Admixture, selection, founder effects and linkage can create LD</text>
    <text x="200" y="198" textAnchor="middle" fill="#a8d8a8" fontSize="8">Recombination over generations usually reduces LD</text>
  </svg>
);

const SPECIATION_MODES_SVG = () => (
  <svg viewBox="0 0 420 240" width="100%" style={{maxWidth:420,display:"block",margin:"0 auto"}}>
    <text x="210" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Major Speciation Modes</text>

    {[
      {x:10,y:28,t:"Allopatric",s:"Physical barrier",c:"#8fe3b0"},
      {x:214,y:28,t:"Peripatric",s:"Small isolate",c:"#f4a261"},
      {x:10,y:130,t:"Parapatric",s:"Adjacent gradient",c:"#7ec8e3"},
      {x:214,y:130,t:"Sympatric",s:"Same geography",c:"#c77dff"},
    ].map(({x,y,t,s,c})=>(
      <g key={t}>
        <rect x={x} y={y} width="196" height="94" rx="10" fill={`${c}15`} stroke={c} strokeWidth="1.6"/>
        <text x={x+98} y={y+17} textAnchor="middle" fill={c} fontSize="9" fontWeight="bold">{t}</text>
        <text x={x+98} y={y+30} textAnchor="middle" fill={`${c}bb`} fontSize="7.5">{s}</text>
      </g>
    ))}

    <line x1="58" y1="72" x2="92" y2="72" stroke="#8fe3b0" strokeWidth="5"/>
    <line x1="104" y1="59" x2="104" y2="85" stroke="#ff6b6b" strokeWidth="3"/>
    <line x1="116" y1="72" x2="150" y2="72" stroke="#8fe3b0" strokeWidth="5"/>

    <circle cx="260" cy="72" r="8" fill="#f4a261"/>
    <circle cx="292" cy="72" r="8" fill="#f4a261"/>
    <circle cx="336" cy="72" r="6" fill="#f4a261" opacity="0.45"/>
    <text x="336" y="86" textAnchor="middle" fill="#f4a261" fontSize="7">founder</text>

    <rect x="46" y="168" width="120" height="8" rx="4" fill="#7ec8e3"/>
    <rect x="100" y="168" width="12" height="8" fill="#e8c547"/>
    <text x="108" y="185" textAnchor="middle" fill="#7ec8e3" fontSize="7">cline</text>

    <circle cx="280" cy="168" r="10" fill="#c77dff"/>
    <circle cx="318" cy="168" r="10" fill="#c77dff"/>
    <line x1="290" y1="168" x2="308" y2="168" stroke="#fff" strokeWidth="1.2" strokeDasharray="3,2"/>
    <text x="300" y="186" textAnchor="middle" fill="#c77dff" fontSize="7">assortative mating</text>
  </svg>
);

const SPECIES_CONCEPTS_SVG = () => (
  <svg viewBox="0 0 420 230" width="100%" style={{maxWidth:420,display:"block",margin:"0 auto"}}>
    <text x="210" y="16" textAnchor="middle" fill="#aaa" fontSize="11" fontWeight="bold">Species Concepts at a Glance</text>
    <rect x="10" y="28" width="400" height="192" rx="10" fill="#0c0c1a" stroke="#1d1d30"/>

    {[
      ["BSC", "Ernst Mayr", "Interbreeding + reproductive isolation", "#8fe3b0", 46],
      ["ESC", "Leigh Van Valen", "Distinct ecological niche", "#7ec8e3", 88],
      ["MRSC", "Hugh Paterson", "Shared mate-recognition system", "#f4a261", 130],
      ["PSC", "Joel Cracraft", "Smallest diagnosable monophyletic lineage", "#c77dff", 172],
    ].map(([code,person,idea,color,y])=>(
      <g key={code}>
        <rect x="22" y={y-16} width="376" height="34" rx="7" fill={`${color}15`} stroke={color} strokeWidth="1.2"/>
        <text x="40" y={y+2} fill={color} fontSize="9" fontWeight="bold">{code}</text>
        <text x="98" y={y+2} fill="#ddd" fontSize="8">{person}</text>
        <text x="232" y={y+2} fill="#aaa" fontSize="8">{idea}</text>
      </g>
    ))}
    <text x="210" y="212" textAnchor="middle" fill="#666" fontSize="8">Scientists often combine concepts (integrative species delimitation)</text>
  </svg>
);

// Map: "lectureId-sectionIndex" → SVG component
const SECTION_IMAGES = {
  "1-0": <SUBFIELDS_SVG />,
  "2-0": <SCALA_SVG />,
  "3-0": <FINCHES_SVG />,
  "3-1": <SELECTION_SVG />,
  "3-3": <ANAGENESIS_SVG />,
  "4-0": <CELL_SVG />,
  "4-2": <DNA_SVG />,
  "4-3": <PROTEIN_SVG />,
  "5-0": <KARYOTYPE_SVG />,
  "5-2": <MITOSIS_MEIOSIS_SVG />,
  "5-3": <CROSSING_SVG />,
  "6-1": <PUNNETT_SVG />,
  "7-0": <MECHANISMS_SVG />,
  "7-1": <SELECTION_SVG />,
  "7-2": <LINKAGE_LD_SVG />,
  "8-0": <SPECIES_CONCEPTS_SVG />,
  "8-1": <SPECIATION_MODES_SVG />,
  "8-2": <ANAGENESIS_SVG />,
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const LECTURES = [
  {
    id:1, title:"Intro to Biological Anthropology", emoji:"🦴", color:"#e8c547",
    content:{
      sections:[
        {
          title:"The Four Subfields of Anthropology",
          body:`Anthropology is the holistic study of humankind — our biology, culture, language, and past. It is divided into four major subfields:

**1. Biological (Physical) Anthropology** — Studies human biological evolution, variation, and adaptation. Examines fossils, genetics, and living primates. The terms "biological" and "physical" are interchangeable; "biological" is now preferred as it better reflects the focus on genetics and life processes rather than just physical measurements.

**2. Cultural Anthropology** — Studies living human cultures, social structures, beliefs, and behaviors through fieldwork and ethnography.

**3. Archaeology** — Studies past human cultures through material remains (artifacts, structures). **Bioarchaeology** is a subfield focusing on human skeletal remains from archaeological sites to study past health, diet, and disease.

**4. Linguistics** — Studies human language — its structure, history, and relationship to culture and cognition.`,
        },
        {
          title:"Specializations Within Biological Anthropology",
          body:`**Paleoanthropology** — Studies human evolution through the fossil record. Excavates and analyzes ancient hominin fossils (e.g., *Australopithecus*, *Homo erectus*) to trace our evolutionary lineage.

**Primatology** — Studies non-human primates (monkeys, apes, prosimians) to understand primate behavior and evolution — and by extension, our own roots. Jane Goodall's chimpanzee research is a classic example.

**Human Biology** — Examines how living human populations vary biologically in response to environment (e.g., altitude adaptations in Tibetans, skin pigmentation with UV exposure).

**Molecular Anthropology** — Uses DNA and genetic techniques to study human evolution, migration patterns, and population relationships. Includes ancient DNA analysis from fossils.

**Forensic Anthropology** — Applies skeletal biology to legal contexts — identifying human remains, estimating age/sex/ancestry from bones, assisting criminal investigations.

**Paleopathology** — Studies disease, trauma, and health in past populations using skeletal and mummified remains (e.g., detecting tuberculosis in Egyptian mummies).`,
        },
      ],
      terms:[
        {term:"Anthropology",def:"Holistic scientific study of humanity — biology, culture, language, and history across time and space."},
        {term:"Biological/Physical Anthropology",def:"Subfield studying human evolution, biological variation, and adaptation. Covers genetics, fossils, primates, and living populations."},
        {term:"Cultural Anthropology",def:"Studies living human societies, cultures, and behaviors through ethnographic fieldwork."},
        {term:"Archaeology",def:"Studies past human cultures through material remains like artifacts and structures."},
        {term:"Bioarchaeology",def:"Studies human skeletal remains from archaeological sites to reconstruct past health, diet, activity, and disease."},
        {term:"Linguistics",def:"Scientific study of human language — its structure, history, and relationship to cognition and culture."},
        {term:"Paleoanthropology",def:"Study of human evolution through the fossil record; examines ancient hominin bones and teeth."},
        {term:"Primatology",def:"Study of non-human primates (apes, monkeys, prosimians) to understand primate behavior and human evolution."},
        {term:"Human Biology",def:"Studies biological variation and adaptation in living human populations."},
        {term:"Molecular Anthropology",def:"Uses DNA/genetic techniques to study human evolution, migration patterns, and population history."},
        {term:"Forensic Anthropology",def:"Applies skeletal biology to legal contexts — identifying remains, determining cause of death, aiding investigations."},
        {term:"Paleopathology",def:"Studies disease, trauma, and health in ancient populations using skeletal and mummified remains."},
      ],
      quiz:[
        {q:"What are the four subfields of anthropology?",a:"Biological (Physical) Anthropology, Cultural Anthropology, Archaeology, and Linguistics."},
        {q:"What's the difference between biological and physical anthropology?",a:"They refer to the same field. 'Biological' is the preferred modern term because it emphasizes genetics and life processes, not just physical measurements."},
        {q:"What does a paleoanthropologist study?",a:"Human evolution through fossil evidence — ancient hominin bones, teeth, and associated artifacts."},
        {q:"How does forensic anthropology differ from bioarchaeology?",a:"Forensic anthropology applies skeletal analysis to legal/criminal investigations of recent remains. Bioarchaeology studies ancient human skeletal remains from archaeological sites."},
        {q:"What is molecular anthropology?",a:"Uses DNA and genetic analysis to study human evolution, population migrations, and relationships between groups."},
      ],
    },
  },
  {
    id:2, title:"History of Evolutionary Thought", emoji:"🔭", color:"#7ec8e3",
    content:{
      sections:[
        {
          title:"Greek & Medieval Worldview",
          body:`**Greek Times — Aristotle (384–322 BCE)**
Aristotle proposed the *Scala Naturae* ("Scale of Nature"), also called the *Great Chain of Being* — a hierarchical ladder from simplest (minerals/plants) to most complex (humans, then God). This implied species were **fixed and unchanging** (Fixity of Species). The universe was **geocentric** (Earth at center).

**Medieval Period**
The Catholic Church dominated intellectual thought. The Great Chain of Being was reinterpreted theologically — God created all species in their final form. Archbishop James Ussher (1581–1656) calculated Earth was created October 23, 4004 BCE from biblical genealogies. This left no time for evolution.

**Scientific Revolution (Renaissance)**
Three major changes shifted scientific thought:
1. **Printing press** — rapid spread of new ideas
2. **Exploration** — encountering new lands and organisms challenged the idea of fixed, known species
3. **Astronomical discoveries** — Copernicus proposed the **heliocentric** (sun-centered) model; Galileo confirmed it with telescope evidence, directly challenging Church authority`,
        },
        {
          title:"Pre-Darwinian Thinkers",
          body:`**Carolus Linnaeus (1707–1778)** — Created **Binomial Nomenclature** (*Genus species*, e.g., *Homo sapiens*) and published *Systema Naturae*. Ironically believed in Fixity of Species — just wanted to catalog God's creation.

**John Ray (1627–1705)** — First defined "species" as organisms that breed together and share common descent.

**Comte de Buffon (1707–1788)** — Suggested species could change over time; proposed Earth older than 6,000 years based on iron cooling rates.

**Georges Cuvier (1769–1832)** — Founded paleontology. Documented extinctions but explained them via **Catastrophism** — periodic catastrophes wiped out species, replaced by new creations. Opposed evolution.

**James Hutton & Charles Lyell** — Geologists who proposed **Uniformitarianism** — "the present is the key to the past." Geological processes operating today are the same as the past → Earth is **millions of years old** → time for evolution.

**Jean-Baptiste Lamarck (1744–1829)** — First coherent evolutionary theory: **Inheritance of Acquired Characteristics**. Organisms develop traits through use/disuse and pass them to offspring. Example: giraffes stretch necks → longer necks inherited. **WRONG** — acquired traits cannot be genetically inherited.

**Thomas Malthus** — Argued populations grow faster than resources → inevitable competition. Darwin read Malthus and recognized competition as the engine of natural selection.`,
        },
        {
          title:"Darwin, Wallace & Natural Selection",
          body:`**Charles Darwin (1809–1882)** — Voyaged on HMS Beagle (1831–1836), studied wildlife across South America and the Galápagos. Spent 20+ years compiling evidence before publishing *On the Origin of Species* (1859).

**Alfred Russel Wallace (1823–1913)** — Independently arrived at the same theory while studying Southeast Asian biodiversity. Co-presented with Darwin in 1858.

**The Logic of Natural Selection (5 steps):**
1. **Variation** — Individuals within a population vary in heritable traits
2. **Heritability** — Traits are passed from parents to offspring
3. **Overproduction** — More offspring are produced than can survive (Malthus)
4. **Competition** — Individuals compete for limited resources
5. **Differential Reproductive Success** — Individuals with better-suited traits survive and reproduce more → favorable traits increase in frequency → populations change over generations

**Key difference from Lamarck:** Darwin's mechanism involves selection acting on **pre-existing heritable variation** — not organisms changing themselves through effort or will.`,
        },
      ],
      terms:[
        {term:"Scala Naturae / Great Chain of Being",def:"Aristotle's hierarchical ladder of life from simplest to most complex. Implied species were fixed and unchanging."},
        {term:"Fixity of Species",def:"Belief that species are permanent and unchanging as God created them. Dominant view before Darwin."},
        {term:"Geocentric vs. Heliocentric",def:"Geocentric = Earth at center of universe (Greek/Medieval). Heliocentric = Sun at center (Copernicus, confirmed by Galileo)."},
        {term:"Binomial Nomenclature",def:"Linnaeus's two-name system: Genus species (e.g., Homo sapiens). Universal scientific naming language."},
        {term:"Systema Naturae",def:"Linnaeus's 1735 work establishing a classification system for all known organisms."},
        {term:"Catastrophism",def:"Cuvier's idea that mass extinctions were caused by sudden catastrophic events, followed by new creation. Opposed gradual change."},
        {term:"Uniformitarianism",def:"Hutton/Lyell's principle that geological processes operating today are the same as in the past. Implies a very old Earth."},
        {term:"Gradualism",def:"Lyell's idea that Earth changed slowly through gradual continuous processes — not sudden catastrophes."},
        {term:"Inheritance of Acquired Characteristics",def:"Lamarck's theory: organisms change during life through use/disuse and pass those changes to offspring. Incorrect — acquired traits aren't hereditary."},
        {term:"Natural Selection",def:"Darwin/Wallace: heritable variation + competition + differential reproductive success → adaptation over generations."},
        {term:"On the Origin of Species",def:"Darwin's 1859 book presenting evidence for evolution by natural selection. Most influential science book ever written."},
        {term:"Biogeography",def:"Study of geographic distribution of species. Patterns (island species resembling nearby mainland species) support common descent."},
      ],
      people:[
        {name:"Aristotle",contribution:"Scala Naturae (Great Chain of Being) — fixed hierarchical view of life; geocentric universe"},
        {name:"Copernicus",contribution:"Proposed heliocentric (sun-centered) model of the solar system, challenging Earth's special status"},
        {name:"Galileo Galilei",contribution:"Used telescope to confirm heliocentric model; directly challenged Church authority on Earth's position"},
        {name:"Archbishop James Ussher",contribution:"Calculated Earth's age as ~6,000 years (creation 4004 BCE) by counting biblical genealogies"},
        {name:"John Ray",contribution:"First scientist to define the biological concept of 'species'"},
        {name:"Carolus Linnaeus",contribution:"Created binomial nomenclature and Systema Naturae; classified all known organisms into a hierarchy"},
        {name:"Comte de Buffon",contribution:"Suggested species could change over time; first to estimate Earth older than 6,000 years"},
        {name:"James Hutton",contribution:"Proposed uniformitarianism — geological processes are consistent over time → implied very old Earth"},
        {name:"Charles Lyell",contribution:"Refined uniformitarianism/gradualism in Principles of Geology; major influence on Darwin's thinking about time"},
        {name:"Georges Cuvier",contribution:"Founded paleontology; documented mass extinctions but explained them through catastrophism (opposed evolution)"},
        {name:"Jean-Baptiste Lamarck",contribution:"First coherent evolutionary theory: inheritance of acquired characteristics (use/disuse). Wrong mechanism, right instinct."},
        {name:"Thomas Malthus",contribution:"Essay on population growth outpacing resources — the competition insight that directly inspired Darwin and Wallace"},
        {name:"Charles Darwin",contribution:"Theory of evolution by natural selection; On the Origin of Species (1859); HMS Beagle voyage"},
        {name:"Alfred Russel Wallace",contribution:"Independently discovered natural selection while in Southeast Asia; co-presented the theory with Darwin in 1858"},
      ],
      quiz:[
        {q:"What did Aristotle's Scala Naturae propose?",a:"A hierarchical 'ladder of life' from simplest to most complex organisms, with humans near the top. It implied species were fixed and unchanging — no evolution was possible."},
        {q:"What were the three major factors that changed scientific thought during the Renaissance?",a:"1) The printing press allowed rapid spread of new ideas. 2) Geographic exploration revealed new organisms challenging the idea of fixed, known species. 3) Astronomical discoveries (Copernicus, Galileo) challenged Church authority."},
        {q:"How did Cuvier explain the fossil record without invoking evolution?",a:"Through Catastrophism — periodic catastrophic events (e.g., floods) wiped out species, and God then created new ones to replace them."},
        {q:"Why was Uniformitarianism important for evolutionary theory?",a:"It established that Earth was extremely old (millions of years), providing the timescale required for gradual evolution. Without deep time, Darwin's mechanism couldn't work."},
        {q:"What was Lamarck's theory and why is it wrong?",a:"Inheritance of acquired characteristics — organisms change during life (use/disuse) and pass those changes to offspring. Wrong because acquired traits (e.g., muscles built by exercise) are not encoded in DNA and cannot be inherited."},
        {q:"What are the 5 key components of natural selection?",a:"1) Variation exists among individuals. 2) Traits are heritable. 3) More offspring are produced than can survive. 4) Competition for limited resources. 5) Individuals with beneficial traits reproduce more → populations change over generations."},
        {q:"Who was Alfred Russel Wallace?",a:"A British naturalist who independently discovered natural selection while studying Southeast Asian wildlife. He co-presented the theory with Darwin to the Linnean Society in 1858 — often overlooked but equally brilliant."},
      ],
    },
  },
  {
    id:3, title:"Adaptation & Natural Selection", emoji:"🦋", color:"#a8d8a8",
    content:{
      sections:[
        {
          title:"Core Concepts of Natural Selection",
          body:`**Evolution** — Change in allele frequencies in a population over generations. Critically: individuals don't evolve — **populations** do.

**Adaptation** — A heritable trait that increases an organism's fitness in its environment. Adaptations arise from natural selection acting on variation over many generations.

**Fitness** — An individual's reproductive success relative to others in the population. High fitness = leaving more surviving offspring. It's NOT about being the strongest in isolation — it's about reproduction in a specific environment.

**Differential Reproductive Success** — The core mechanism: individuals with better-suited traits survive and reproduce more, passing those traits on. Over generations, favorable traits increase in frequency.

**Selection Pressure** — Any environmental factor that affects which individuals survive and reproduce: predators, disease, climate, food availability, competition.

**Niche** — An organism's ecological role — what it eats, where it lives, how it interacts with other species. Niches shape selection pressures.

**Artificial Selection** — Humans deliberately select which individuals reproduce based on desired traits. Examples: dog breeds, crop plants, cattle. Demonstrates that variation exists and selection can rapidly change populations — directly inspired Darwin.`,
        },
        {
          title:"Evidence: Peppered Moths & Industrial Melanism",
          body:`**Industrial Melanism** is one of the best-documented real-world examples of natural selection.

Before the Industrial Revolution in England, peppered moths were mostly **light-colored** (peppered) with rare dark (melanic) variants. Light moths blended with lichen-covered tree bark → birds couldn't see them → they survived and reproduced.

During industrialization (1800s–1900s), coal soot blackened tree trunks and killed lichens:
- **Light moths** were VISIBLE on dark bark → birds ate them → decreased in frequency
- **Dark moths** were CAMOUFLAGED on dark bark → survived → increased in frequency
- By the late 1800s, ~98% of Manchester moths were dark

After clean air acts (post-1950s), lichens returned, bark lightened, and light moths rebounded.

This is **directional selection** — selection favoring one extreme of a trait distribution. It demonstrates: (1) pre-existing heritable variation, (2) changed selection pressure, (3) measurable population change over observable time.`,
        },
        {
          title:"The Grants & Darwin's Finches",
          body:`**Peter and Rosemary Grant** (Princeton biologists) spent 40+ years studying medium ground finches (*Geospiza fortis*) on Daphne Major island in the Galápagos. Their work is the most direct, measured documentation of natural selection in wild populations.

**Key Study — 1977 Drought:** A severe drought eliminated small, soft seeds. Only large, hard seeds remained:
- Small-beaked birds couldn't crack hard seeds → died
- Large-beaked birds cracked hard seeds → survived and reproduced
- **Average beak size in the population increased measurably within ONE generation**

This proved: (1) natural selection can operate extremely rapidly (within years), (2) measurable heritable variation exists in wild populations, (3) environmental change (selection pressure) directly and measurably causes evolutionary change.

When rains returned, small seeds came back, and beak size shifted back — demonstrating that **evolution is dynamic and reversible** based on current selection pressures.`,
        },
        {
          title:"Variation, Modes & Rates of Evolution",
          body:`**Continuous Variation (Quantitative)** — Smooth range of values with no distinct categories. Controlled by multiple genes + environment. Examples: height, weight, skin color, IQ. Data is quantitative (numerical measurements).

**Discontinuous Variation (Discrete/Dichotomous)** — Distinct, non-overlapping categories. Usually one or few genes. Examples: blood type (A, B, AB, O), attached vs. free earlobes, presence/absence of a disease. Data is qualitative (categories).

**Adaptive Radiation** — When one ancestral species rapidly diversifies into many species filling different ecological niches. Example: Darwin's finches diversified into 14+ species with different beak types after colonizing the Galápagos.

**Anagenesis** — Linear evolution: one species gradually transforms into another species over time. No branching.

**Cladogenesis** — Branching evolution: one species splits into two or more new species. This is how biodiversity increases.

**Phyletic Gradualism** — Evolution proceeds slowly and continuously in small steps (Darwin's original view).

**Punctuated Equilibrium** (Gould & Eldredge, 1972) — Evolution occurs in rapid bursts ("punctuations") separated by long periods of **stasis** (little to no change). Better explains gaps in the fossil record.

**Hopeful Monster** — Discredited idea that large single mutations could instantly produce a new adapted species. **WRONG** because: (1) large mutations are almost always lethal, (2) a single mutant can't form a viable population, (3) evolution requires gradual, selection-tested change.

**Three factors affecting rate of evolutionary change:** (1) generation time — shorter = faster evolution; (2) strength of selection pressure — stronger = faster change; (3) amount of genetic variation — more = more raw material.`,
        },
      ],
      terms:[
        {term:"Evolution",def:"Change in allele frequencies in a population over generations. Populations evolve, not individuals."},
        {term:"Adaptation",def:"A heritable trait that increases fitness in a specific environment. Result of natural selection."},
        {term:"Fitness",def:"Relative reproductive success — how many surviving offspring an individual leaves compared to others in the population."},
        {term:"Differential Reproductive Success",def:"Individuals with better-suited traits reproduce more, passing those traits on. The engine of natural selection."},
        {term:"Selection Pressure",def:"Any environmental factor affecting survival and reproduction (predators, disease, food, climate)."},
        {term:"Niche",def:"An organism's ecological role — what it eats, where it lives, how it interacts with other species."},
        {term:"Industrial Melanism",def:"Increase in dark moths during industrialization due to soot-blackened bark making light moths visible to predators."},
        {term:"Directional Selection",def:"Selection favoring one extreme of a trait distribution, shifting the population mean in that direction."},
        {term:"Continuous Variation",def:"Traits with a smooth range of values (quantitative). Multiple genes + environment. E.g., height, skin color."},
        {term:"Discontinuous Variation",def:"Traits with distinct, non-overlapping categories (qualitative). E.g., blood type, sex."},
        {term:"Adaptive Radiation",def:"Rapid diversification of one ancestral species into many species filling different ecological niches."},
        {term:"Anagenesis",def:"Linear evolution: one species transforms into another over time. No branching."},
        {term:"Cladogenesis",def:"Branching evolution: one ancestral species splits into two or more new species. How biodiversity increases."},
        {term:"Phyletic Gradualism",def:"Evolution proceeds slowly and continuously in small steps over long time periods."},
        {term:"Punctuated Equilibrium",def:"Evolution occurs in rapid bursts separated by long periods of stasis. Explains fossil record gaps."},
        {term:"Stasis",def:"Long periods of little or no evolutionary change in a lineage."},
        {term:"Hopeful Monster",def:"Discredited idea that large mutations could instantly create a new adapted species. Large mutations are almost always lethal."},
        {term:"Evolutionary Constraint",def:"Developmental, genetic, or physical factors that limit the range of possible evolutionary changes."},
        {term:"Artificial Selection",def:"Human-directed selective breeding for desired traits. Demonstrates selection's power; directly inspired Darwin."},
        {term:"Peter & Rosemary Grant",def:"Princeton biologists who spent 40+ years studying Galápagos finches, directly measuring natural selection in real time."},
      ],
      quiz:[
        {q:"What is fitness in evolutionary terms?",a:"Relative reproductive success — how many surviving, reproducing offspring an individual leaves compared to others. NOT just physical strength — it's about reproduction in a specific environment."},
        {q:"Explain industrial melanism and what it demonstrates.",a:"Industrial soot darkened tree bark (changed selection pressure). Light moths became visible → eaten by birds. Dark moths camouflaged → survived and reproduced. Population shifted to mostly dark. Demonstrates: pre-existing heritable variation + changed selection pressure = measurable population evolution."},
        {q:"Why is the Grants' finch study important?",a:"It directly measured natural selection in real time — beak size shifted measurably within ONE generation in response to drought. Proved natural selection is fast, observable, and reversible."},
        {q:"What is a 'Hopeful Monster' and why is it wrong?",a:"The idea that a single large mutation could instantly create a new adapted species. Wrong because: (1) large mutations are nearly always lethal, (2) a single mutant can't form a viable breeding population, (3) evolution requires gradual, selection-tested change."},
        {q:"Compare phyletic gradualism vs. punctuated equilibrium.",a:"Phyletic gradualism: slow, steady change over long periods (Darwin's original view). Punctuated equilibrium (Gould & Eldredge): rapid bursts of change separated by long stasis — better explains gaps in the fossil record."},
        {q:"Differentiate anagenesis and cladogenesis.",a:"Anagenesis: one lineage transforms linearly into a new species over time — no branching. Cladogenesis: one lineage splits into two or more new species — this is how biodiversity increases."},
        {q:"What three factors influence the rate of evolutionary change?",a:"1) Generation time — shorter generations = faster evolution. 2) Strength of selection pressure — stronger = faster change. 3) Amount of genetic variation available — more variation = more raw material for selection to act on."},
      ],
    },
  },
  {
    id:4, title:"Cell Biology", emoji:"🔬", color:"#f4a261",
    content:{
      sections:[
        {
          title:"Prokaryotes vs. Eukaryotes & Cell Types",
          body:`**Prokaryotes** — Simple, ancient cells. NO membrane-bound nucleus — DNA floats freely in the cytoplasm. No membrane-bound organelles. Bacteria and Archaea are prokaryotes. Small and fast-dividing.

**Eukaryotes** — Complex cells with a TRUE membrane-bound nucleus containing DNA. Have membrane-bound organelles (mitochondria, ER, etc.). All animals, plants, fungi, and protists are eukaryotes.

**Two types of eukaryotic cells in animals:**
1. **Somatic cells** — All body cells (skin, muscle, nerve, liver, etc.). **Diploid** (2 copies of each chromosome = 46 in humans). Divide by **mitosis**.
2. **Gametic cells** — Sex cells (sperm and eggs/ova). **Haploid** (1 copy = 23 in humans). Produced by **meiosis**. Fuse at fertilization to restore the diploid number.

**Totipotent** — A cell capable of developing into ANY cell type, including a complete organism. A fertilized egg (zygote) is totipotent. As cells specialize (differentiate), they lose totipotency.`,
        },
        {
          title:"Cell Organelles & Functions",
          body:`**Nucleus** — The "control center." Contains the cell's DNA. Surrounded by a nuclear membrane with pores. Directs all cellular activities through gene expression.

**Mitochondria** — The "powerhouse." Produces ATP (adenosine triphosphate) through cellular respiration (breaking down glucose + oxygen). Critically: contains its own circular DNA (**mitochondrial DNA / mtDNA**) — inherited **only from the mother** because eggs contain mitochondria but sperm's mitochondria are destroyed after fertilization. This maternal-only inheritance makes mtDNA invaluable for tracing maternal lineages in evolutionary anthropology.

**Ribosomes** — Small organelles (no membrane) that build proteins. They read mRNA instructions and link amino acids into polypeptide chains. Found free in the cytoplasm or attached to the rough endoplasmic reticulum.

**Endoplasmic Reticulum (ER)** — Network of membranes extending from the nucleus. *Rough ER* (studded with ribosomes) → makes and transports proteins. *Smooth ER* → lipid synthesis, detoxification.

**Cytoplasm** — The fluid filling the cell interior outside the nucleus. Organelles are suspended here.`,
        },
        {
          title:"DNA Structure & Replication",
          body:`**DNA (Deoxyribonucleic Acid)** — The molecule storing genetic information in a **double helix** — two complementary strands wound around each other.

**Structure:**
- **Nucleotide** = the basic building block: (1) deoxyribose sugar + (2) phosphate group + (3) one nitrogenous base
- **Four bases:** Adenine (A), Thymine (T), Guanine (G), Cytosine (C)
- **Complementary base pairing:** A always pairs with T; G always pairs with C (held by hydrogen bonds)
- The two strands run **antiparallel** (one runs 5'→3', the other 3'→5')

**DNA Replication (semi-conservative):**
1. The double helix unzips (hydrogen bonds break)
2. Each strand serves as a template
3. DNA polymerase reads the template and adds complementary nucleotides
4. Result: 2 identical DNA molecules, each with one old strand + one new strand

**Nuclear DNA** — Located on chromosomes in the nucleus. ~20,000–25,000 genes. Codes for most proteins.
**Mitochondrial DNA (mtDNA)** — Small, circular, in mitochondria. Only 37 genes. Maternally inherited. Mutates faster than nuclear DNA → useful for phylogenetic and ancestry studies.`,
        },
        {
          title:"RNA & Protein Synthesis",
          body:`**RNA vs. DNA:** RNA is single-stranded, uses ribose sugar (not deoxyribose), and uses Uracil (U) instead of Thymine (T).

**Three types of RNA:**
1. **mRNA (Messenger RNA)** — Carries the genetic code from DNA in the nucleus to ribosomes. The "message."
2. **tRNA (Transfer RNA)** — Brings specific amino acids to the ribosome during translation. Has an **anticodon** that base-pairs with mRNA codons.
3. **rRNA (Ribosomal RNA)** — Structural and catalytic component of ribosomes.

**Protein Synthesis — Two Steps:**

**Step 1: Transcription** (nucleus)
RNA polymerase reads the DNA template strand → builds a complementary mRNA strand. The mRNA exits through nuclear pores.

**Step 2: Translation** (ribosomes)
The ribosome reads mRNA in triplets called **codons** (3 bases = 1 codon). Each codon codes for one **amino acid** (e.g., AUG = start codon = methionine). tRNA brings the correct amino acid, matching its **anticodon** to the mRNA codon. Amino acids are linked → **polypeptide chain** → folds into a **protein**.

**Gene** — A DNA sequence at a specific chromosomal **locus** coding for a protein or functional RNA. Genes make up only ~1.5% of the human genome.
**Exons** — Coding sequences included in the final mRNA and translated.
**Introns** — Non-coding sequences spliced out before translation.`,
        },
      ],
      terms:[
        {term:"Prokaryote",def:"Cell without a membrane-bound nucleus or organelles. DNA floats in cytoplasm. Bacteria and Archaea."},
        {term:"Eukaryote",def:"Complex cell with a true membrane-bound nucleus and organelles. All animals, plants, fungi."},
        {term:"Somatic cells",def:"All body cells (non-sex cells). Diploid (46 chromosomes in humans). Divide by mitosis."},
        {term:"Gametic cells",def:"Sex cells (sperm and eggs). Haploid (23 chromosomes). Made by meiosis."},
        {term:"Nucleus",def:"Membrane-bound organelle containing the cell's DNA. The control center — directs cell function through gene expression."},
        {term:"Mitochondria",def:"Produces ATP through cellular respiration. Has its own circular DNA (mtDNA), inherited maternally only."},
        {term:"Ribosomes",def:"Sites of protein synthesis. Read mRNA and link amino acids into polypeptide chains."},
        {term:"DNA",def:"Double-helix molecule storing genetic information. Nucleotides with bases A, T, G, C. A-T and G-C pairing."},
        {term:"Nucleotide",def:"DNA/RNA building block: deoxyribose sugar + phosphate group + nitrogenous base."},
        {term:"Base pairs",def:"A-T and G-C in DNA (A-U and G-C in RNA). Complementary base pairing holds the double helix together."},
        {term:"Gene",def:"A DNA sequence at a specific chromosomal locus that codes for a protein or functional RNA."},
        {term:"Locus/loci",def:"The specific location of a gene on a chromosome."},
        {term:"mRNA",def:"Messenger RNA: carries genetic code from DNA to ribosomes for translation."},
        {term:"tRNA",def:"Transfer RNA: brings amino acids to ribosome during translation; has anticodon matching mRNA codons."},
        {term:"rRNA",def:"Ribosomal RNA: structural and catalytic component of ribosomes."},
        {term:"Codon",def:"Three-nucleotide sequence on mRNA that codes for one specific amino acid."},
        {term:"Anticodon",def:"Three-nucleotide sequence on tRNA that pairs with a complementary mRNA codon."},
        {term:"Transcription",def:"DNA → mRNA in the nucleus. RNA polymerase reads DNA template and builds complementary mRNA."},
        {term:"Translation",def:"mRNA → protein at ribosomes. Codons read, tRNAs bring amino acids, polypeptide chain assembled."},
        {term:"Exons",def:"Coding DNA sequences included in mature mRNA and translated into protein."},
        {term:"Introns",def:"Non-coding sequences within genes, spliced out of pre-mRNA before translation."},
        {term:"Totipotent",def:"A cell capable of differentiating into any cell type or a complete organism (e.g., fertilized egg/zygote)."},
        {term:"Mitochondrial DNA (mtDNA)",def:"Circular DNA in mitochondria; 37 genes; inherited only from the mother; used in ancestry and evolutionary studies."},
      ],
      quiz:[
        {q:"What is the key structural difference between prokaryotes and eukaryotes?",a:"Eukaryotes have a true membrane-bound nucleus and membrane-bound organelles. Prokaryotes have neither — DNA floats freely in the cytoplasm."},
        {q:"Why is mitochondrial DNA special in anthropology?",a:"It's inherited ONLY from the mother (eggs retain mitochondria; sperm's are destroyed at fertilization), it mutates faster than nuclear DNA, and it doesn't recombine — making it a perfect tool for tracing maternal lineages across thousands of generations."},
        {q:"What are the base-pairing rules in DNA?",a:"A (Adenine) pairs with T (Thymine); G (Guanine) pairs with C (Cytosine). In RNA, T is replaced by U (Uracil), so A pairs with U."},
        {q:"Describe protein synthesis from DNA to protein.",a:"Transcription (nucleus): RNA polymerase reads DNA template → builds mRNA. Translation (ribosome): ribosome reads mRNA codons → tRNAs bring matching amino acids via anticodons → amino acids linked into polypeptide chain → folds into protein."},
        {q:"What is the difference between exons and introns?",a:"Exons are coding sequences expressed in the final mRNA and translated into protein. Introns are non-coding intervening sequences spliced out before translation."},
        {q:"What does 'totipotent' mean?",a:"A totipotent cell can develop into any cell type or even a complete organism. A fertilized egg (zygote) is totipotent. Cells lose totipotency as they differentiate."},
        {q:"What are the three types of RNA and their functions?",a:"mRNA: carries genetic code from DNA to ribosome. tRNA: brings amino acids to ribosome, has anticodon. rRNA: structural and catalytic component of ribosomes."},
      ],
    },
  },
  {
    id:5, title:"Cell Division (Genetics)", emoji:"🧬", color:"#c77dff",
    content:{
      sections:[
        {
          title:"Chromosomes, DNA & the Human Karyotype",
          body:`**Chromatin** — The relaxed, unwound DNA-protein complex in the nucleus during **interphase** (when the cell is NOT dividing). DNA is wrapped around histone proteins. Chromatin is not visible under a light microscope.

**Chromosomes** — When a cell prepares to divide, chromatin condenses and coils tightly into visible, X-shaped structures. Each chromosome consists of two identical **sister chromatids** joined at the **centromere**.

**Human Karyotype** — The complete set of chromosomes in a cell. Humans have **46 chromosomes (23 pairs)**:
- **22 pairs of autosomes** — Non-sex chromosomes; same arrangement in both males and females
- **1 pair of sex chromosomes** — XX (female) or XY (male)

A karyotype is made by photographing chromosomes from a dividing cell and arranging them in homologous pairs by size. Karyotyping can detect chromosomal abnormalities (e.g., Trisomy 21 = Down syndrome).`,
        },
        {
          title:"Diploid, Haploid & Alleles",
          body:`**Diploid (2n)** — Cells with two copies of each chromosome (one from mom, one from dad). Human somatic cells: 2n = 46.

**Haploid (n)** — Cells with one copy of each chromosome. Human gametes: n = 23. At fertilization: 23 (sperm) + 23 (egg) = 46 → diploid organism.

**Alleles** — Different versions of the same gene at the same locus on homologous chromosomes. Since diploid organisms have two chromosomes per pair, they have two alleles per gene locus:
- **Homozygous** — Both alleles identical (e.g., BB or bb)
- **Heterozygous** — Alleles different (e.g., Bb)

**Gametic cells** — Sperm and eggs. Haploid (n=23). Produced by meiosis.
**Somatic cells** — All other body cells. Diploid (2n=46). Produced by mitosis.`,
        },
        {
          title:"Mitosis vs. Meiosis",
          body:`**MITOSIS** — Cell division for growth, repair, and asexual reproduction.
- Input: 1 diploid cell (46 chromosomes)
- Output: 2 **identical** diploid daughter cells (46 each)
- 1 round of division
- Stages: Prophase → Metaphase → Anaphase → Telophase → Cytokinesis
- Sister chromatids are pulled apart. Daughter cells genetically identical to parent.

**MEIOSIS** — Cell division to produce sex cells (gametes).
- Input: 1 diploid cell (46 chromosomes)
- Output: 4 **genetically unique** haploid daughter cells (23 each)
- 2 rounds of division: **Meiosis I** (separates homologous chromosomes) + **Meiosis II** (separates sister chromatids)
- **Crossing-over** occurs during Meiosis I → genetic variation

**Quick comparison:**
Mitosis → 1 division → 2 cells → diploid → identical → no crossing-over → growth/repair
Meiosis → 2 divisions → 4 cells → haploid → unique → crossing-over → gamete production`,
        },
        {
          title:"Crossing-Over & Errors in Meiosis",
          body:`**Crossing-Over (Recombination)** — During Prophase I of meiosis, homologous chromosomes pair up and exchange segments of DNA. This **shuffles alleles** between maternal and paternal chromosomes, creating entirely new allele combinations. This is why all siblings (except identical twins) are genetically unique. Crossing-over is a MAJOR source of genetic diversity.

**Errors — Nondisjunction:**
When chromosomes fail to separate properly during meiosis → gametes with wrong chromosome number.

**Trisomy (2n+1)** — Gamete with an extra chromosome fertilized normally → 3 copies of one chromosome.
- **Down Syndrome = Trisomy 21** — Three copies of chromosome 21. Features: intellectual disability, characteristic facial features, increased risk of heart defects. Risk increases significantly with maternal age.
- Trisomy 18 (Edwards syndrome) and Trisomy 13 (Patau syndrome) are usually not survivable.

**Monosomy (2n-1)** — Gamete missing a chromosome, fertilized normally → only 1 copy.
- **Turner Syndrome = 45,X** — Females with only one X chromosome. Features: short stature, infertility, webbed neck, usually normal intelligence. The ONLY monosomy that is viable in humans.`,
        },
      ],
      terms:[
        {term:"Chromatin",def:"Relaxed, unwound DNA-protein complex in the nucleus during interphase. Not visible under light microscope."},
        {term:"Chromosomes",def:"Condensed, coiled chromatin visible during cell division. Humans: 46 chromosomes (23 pairs). Each = two sister chromatids at centromere."},
        {term:"Sister chromatids",def:"Two identical copies of a chromosome joined at the centromere, produced after DNA replication."},
        {term:"Karyotype",def:"Complete chromosomal profile of a cell. Humans: 46 chromosomes = 22 autosome pairs + 1 sex chromosome pair."},
        {term:"Diploid (2n)",def:"Having two sets of chromosomes (one from each parent). Human somatic cells: 2n = 46."},
        {term:"Haploid (n)",def:"Having one set of chromosomes. Human gametes: n = 23."},
        {term:"Allele",def:"One of two or more alternative versions of a gene at the same chromosomal locus."},
        {term:"Homozygous",def:"Having two identical alleles at a locus (e.g., AA or aa)."},
        {term:"Heterozygous",def:"Having two different alleles at a locus (e.g., Aa)."},
        {term:"Mitosis",def:"Cell division producing 2 identical diploid daughter cells. Used for growth and repair. 1 division, no crossing-over."},
        {term:"Meiosis",def:"Cell division producing 4 unique haploid gametes. 2 rounds of division; crossing-over occurs in Meiosis I."},
        {term:"Crossing-over (Recombination)",def:"Exchange of DNA segments between homologous chromosomes during Meiosis I. Creates new allele combinations — major source of genetic diversity."},
        {term:"Monosomy",def:"Only one copy of a chromosome (2n-1). Example: Turner Syndrome (45,X)."},
        {term:"Trisomy",def:"Three copies of a chromosome (2n+1). Example: Down Syndrome = Trisomy 21."},
      ],
      quiz:[
        {q:"What is the difference between chromatin and chromosomes?",a:"Chromatin is the relaxed, uncoiled DNA-protein complex during interphase — not visible under a light microscope. Chromosomes are condensed, coiled chromatin during cell division — visible as X-shaped structures under a microscope."},
        {q:"What does the human karyotype contain?",a:"46 chromosomes total: 22 pairs of autosomes (non-sex chromosomes, same in ♀ and ♂) + 1 pair of sex chromosomes (XX in females, XY in males). Each pair has one chromosome from mom and one from dad."},
        {q:"Compare mitosis and meiosis.",a:"Mitosis: growth/repair, 1 division, 2 identical diploid cells (46 chr), no crossing-over. Meiosis: gamete production, 2 divisions, 4 unique haploid cells (23 chr), crossing-over occurs in Meiosis I."},
        {q:"Why is crossing-over important?",a:"It shuffles alleles between homologous chromosomes during Meiosis I, creating entirely new allele combinations in each gamete. This is a major source of genetic diversity — why all siblings (except identical twins) are genetically unique."},
        {q:"What is nondisjunction and give two examples.",a:"Nondisjunction: chromosomes fail to separate during meiosis → gametes with wrong chromosome number. Examples: Down Syndrome (Trisomy 21 — extra chromosome 21; intellectual disability, facial features); Turner Syndrome (Monosomy X = 45,X — females with one X; short stature, infertility, usually normal intelligence)."},
      ],
    },
  },
  {
    id:6, title:"Genotype to Phenotype", emoji:"🧪", color:"#ff6b6b",
    content:{
      sections:[
        {
          title:"Genotype, Phenotype & Mendel's Laws",
          body:`**Genotype** — The actual genetic makeup of an organism — the specific alleles it carries at one or more gene loci (e.g., Bb, IAIA). The genotype is the **blueprint**.

**Phenotype** — The observable physical, biochemical, or behavioral expression of the genotype (e.g., brown eyes, blood type B, curly hair). **Phenotype = Genotype + Environment**.

**Gregor Mendel (1822–1884)** — Austrian monk who conducted pea plant breeding experiments, discovering the laws of inheritance. His work was ignored until 1900, when it became the foundation of genetics.

**Mendel's Postulates:**
1. **Particulate Inheritance** — Traits are determined by discrete "factors" (genes/alleles), NOT by blending. Each parent passes one allele per trait to offspring.
2. **Law of Segregation** — The two alleles for each trait separate during gamete formation → each gamete carries only ONE allele per gene. At fertilization, offspring receive one allele from each parent.
3. **Law of Independent Assortment** — Genes for different traits are inherited independently of each other (when on different chromosomes).

**Blending Inheritance** — The pre-Mendel idea that offspring traits blend both parents' traits like mixing paint. **WRONG** — if true, all variation would disappear within a few generations. Mendel's particulate inheritance model disproved this.`,
        },
        {
          title:"Dominance, Recessiveness, Codominance & Punnett Squares",
          body:`**Dominant** — An allele expressed even when only one copy is present (in heterozygotes). Written as a capital letter (A). Examples of dominant traits: widow's peak, free earlobes, tongue rolling, Huntington's disease (fatal — but dominant).

**Recessive** — An allele expressed ONLY when two copies are present (homozygous recessive aa). Written as lowercase (a). Examples: attached earlobes, cystic fibrosis, sickle cell anemia, PKU (phenylketonuria).

**Codominant** — Both alleles are expressed simultaneously; neither dominates. Classic example: **ABO blood type**
- Iᴬ = produces A antigens; Iᴮ = produces B antigens; i = produces no antigens
- Iᴬ and Iᴮ are codominant → IᴬIᴮ = blood type **AB** (both A and B antigens present)
- i is recessive → ii = blood type **O**; IᴬIᴬ or Iᴬi = type A; IᴮIᴮ or Iᴮi = type B

**Punnett Square** — Grid for predicting offspring genotype/phenotype probabilities.
For a **Tt × Tt** cross: TT (25%) : Tt (50%) : tt (25%) genotypes → **3:1 phenotype ratio** (3 tall : 1 short).
Homozygous dominant (TT) = shows dominant phenotype
Heterozygous (Tt) = shows dominant phenotype (carrier)
Homozygous recessive (tt) = shows recessive phenotype`,
        },
        {
          title:"Types of Genetic Variation",
          body:`**SNP (Single Nucleotide Polymorphism)** — A change in a single DNA base pair (e.g., …ATTGCA… vs …ATTACA…). Most common form of genetic variation. ~10 million SNPs in the human genome. Most have no effect; some alter protein function or gene expression. Used in medical genetics, ancestry testing, and evolutionary studies.

**Microsatellite** — Short, repeated DNA sequences (e.g., CACACA… repeated a variable number of times). Highly variable between individuals. Used in forensic DNA fingerprinting, paternity testing, and population genetics.

**Copy Number Variant (CNV)** — Variation in how many copies of a gene or DNA region an individual has. Some people have 1 copy, others 3 or more. Can affect gene expression levels and disease susceptibility.

**Structural element** — A DNA sequence that codes for a functional protein (via transcription and translation). Differences between species in structural genes produce different proteins.

**Regulatory element** — DNA sequences that control WHEN, WHERE, and HOW MUCH a gene is expressed. Includes promoters, enhancers, and binding sites for transcription factors.

**Transcription factor** — A protein that binds to regulatory elements and controls whether a gene is transcribed.

**Why humans and chimps are so different despite sharing ~98% of DNA:**
Most of the functional differences lie in **regulatory regions** — controlling gene expression timing, tissue specificity, and quantity. The same structural genes can produce radically different phenotypes if their expression patterns differ. Genes controlling brain development, face shape, limb proportions, and posture may have nearly identical sequences in humans and chimps but be expressed at different times, in different tissues, or at different levels.`,
        },
        {
          title:"Heritability & Complex Traits",
          body:`**Heritability** — The proportion of phenotypic variation in a population attributable to **genetic differences** (as opposed to environmental differences). Scale: 0 to 1 (or 0%–100%).

- **High heritability** (close to 1): genetic variation explains most of the phenotypic variation in that population.
  Examples: eye color (~90%), blood type (100% heritable), height (~80%), fingerprint ridge count (~95%)
- **Low heritability** (close to 0): environmental factors explain most of the variation.
  Examples: specific language spoken (~0% — purely environmental), number of scars, income

**Critical nuances:**
1. Heritability ≠ "determined by genes." A trait with high heritability can still be modified by environment (e.g., height is ~80% heritable but severely affected by malnutrition).
2. Heritability estimates apply to a SPECIFIC population in a specific environment — they don't transfer universally.
3. Heritability describes variation BETWEEN individuals in a population, NOT how much genes contribute to one individual's trait.

**Continuous traits** (polygenic + environment, e.g., height, skin color) → normal distribution bell curve.
**Discrete/Mendelian traits** (one gene, e.g., blood type, Huntington's) → simple dominant/recessive rules.`,
        },
      ],
      terms:[
        {term:"Genotype",def:"The specific alleles an organism carries at one or more gene loci. The genetic blueprint."},
        {term:"Phenotype",def:"The observable expression of the genotype. Phenotype = Genotype + Environment."},
        {term:"Gregor Mendel",def:"Austrian monk (1822–1884) who discovered the laws of inheritance through pea plant experiments."},
        {term:"Law of Segregation",def:"Mendel's 2nd postulate: the two alleles for a trait separate during gamete formation → each gamete has one allele per gene."},
        {term:"Mendelian Inheritance",def:"Inheritance following Mendel's laws: particulate, discrete traits with dominant/recessive patterns."},
        {term:"Blending Inheritance",def:"Discredited idea that offspring traits blend parents' traits like paint. Disproved by Mendel's particulate model."},
        {term:"Dominant",def:"Allele expressed even when only one copy is present (in heterozygotes). Capital letter (A)."},
        {term:"Recessive",def:"Allele expressed only when two copies are present (homozygous aa). Lowercase letter (a)."},
        {term:"Codominant",def:"Both alleles expressed simultaneously. Example: ABO blood type — IᴬIᴮ = blood type AB."},
        {term:"Punnett Square",def:"Grid tool for predicting offspring genotype/phenotype probabilities. Tt × Tt gives 3:1 dominant:recessive phenotype ratio."},
        {term:"SNP (Single Nucleotide Polymorphism)",def:"A single base-pair change in DNA. Most common form of genetic variation (~10 million in the human genome)."},
        {term:"Microsatellite",def:"Short repeated DNA sequences, highly variable between individuals. Used in DNA fingerprinting and paternity testing."},
        {term:"Copy Number Variant (CNV)",def:"Variation in the number of copies of a gene/DNA region. Can affect expression levels and disease risk."},
        {term:"Structural element",def:"DNA sequence that codes for a functional protein via transcription and translation."},
        {term:"Regulatory element",def:"DNA sequence controlling when/where/how much a gene is expressed. Key to human-chimp phenotypic differences despite ~98% DNA similarity."},
        {term:"Transcription factor",def:"Protein that binds regulatory DNA elements to activate or suppress gene transcription."},
        {term:"Heritability",def:"Proportion of phenotypic variation in a population attributable to genetic differences. Scale 0–1. Population-specific — NOT a fixed property of a trait."},
      ],
      quiz:[
        {q:"What is the difference between genotype and phenotype?",a:"Genotype = specific alleles an organism carries (the genetic blueprint, e.g., Bb). Phenotype = observable outcome (e.g., brown eyes). Phenotype = Genotype + Environment."},
        {q:"What were Mendel's first three postulates?",a:"1) Particulate inheritance — traits are discrete units passed whole, not blended. 2) Law of Segregation — alleles separate during gamete formation; each gamete gets one allele per gene. 3) Law of Independent Assortment — different genes are inherited independently (on different chromosomes)."},
        {q:"What is codominance? Give an example.",a:"Both alleles are expressed simultaneously — neither dominates. Example: ABO blood type. A person with IᴬIᴮ expresses both A and B antigens → blood type AB. Both allele products are present in the phenotype."},
        {q:"Why are humans and chimps so different despite sharing ~98% of DNA?",a:"Most functional differences lie in REGULATORY regions — controlling when, where, and how much genes are expressed. The same structural genes produce very different phenotypes when their expression patterns differ (different timing, different tissues, different quantities). Regulatory differences in genes controlling brain development and body plan explain most human-chimp phenotypic differences."},
        {q:"What is heritability and give examples of high vs. low heritability traits?",a:"Heritability = proportion of phenotypic variation in a population explained by genetic differences. High: eye color (~90%), blood type (100%), height (~80%). Low: specific language spoken (near 0% — purely environmental). Note: heritability is population-specific and doesn't mean a trait is 'fixed' by genes."},
        {q:"What is a SNP?",a:"Single Nucleotide Polymorphism — a change in a single base pair in the DNA sequence. Most common form of genetic variation (~10 million in the human genome). Can affect protein function or gene regulation; used in medical genetics, ancestry testing, and evolutionary studies."},
        {q:"What is the difference between a structural and regulatory element?",a:"Structural elements code for functional proteins through transcription and translation. Regulatory elements control when/where/how much a gene is expressed — they bind transcription factors. Regulatory differences account for most human-chimp phenotypic differences despite ~98% DNA similarity."},
      ],
    },
  },
  {
    id:7, title:"Mechanisms of Evolution", emoji:"🌍", color:"#9ad1ff",
    content:{
      sections:[
        {
          title:"The Four Primary Mechanisms of Evolutionary Change",
          body:`Evolution is most precisely defined as **change in allele frequencies** across generations in a population. Four mechanisms can change allele frequencies:

**1. Natural Selection** — Non-random process where heritable traits affecting survival/reproduction become more or less common.

**2. Mutation** — Ultimate source of new genetic variation (new alleles). Random with respect to need.

**3. Gene Flow** — Movement of alleles between populations through migration + reproduction.

**4. Genetic Drift** — Random change in allele frequencies due to sampling error, strongest in small populations.

Important: Selection is the only mechanism that consistently produces adaptation. Mutation, drift, and gene flow can increase, decrease, or redistribute variation without necessarily improving fitness.`,
        },
        {
          title:"Mutation, Selection Modes & Sources of Variation",
          body:`**Mutations** are heritable DNA sequence changes. Major classes:
- **Point mutation** (single-base change)
- **Insertion** (extra base(s) added)
- **Deletion** (base(s) removed)
- **Duplication** (segment copied)

Functional effects:
- **Beneficial** — increases fitness in a specific environment
- **Deleterious** — lowers fitness
- **Neutral** — little or no fitness effect

**Three major patterns of natural selection on trait distributions:**

**Directional selection** — favors one extreme phenotype; mean shifts in one direction.

**Stabilizing selection** — favors intermediate phenotype; extremes removed; variance decreases.

**Disruptive (diversifying) selection** — favors both extremes over the intermediate; can increase variance and potentially contribute to divergence.

**How new variation enters populations:** mutation introduces new alleles; recombination (crossing-over + independent assortment) reshuffles existing alleles into new combinations; gene flow brings alleles from other populations.`,
        },
        {
          title:"Independent Assortment, Linkage & Linkage Disequilibrium",
          body:`**Mendel's Law of Independent Assortment** states that alleles of different genes sort independently into gametes **when genes are on different chromosomes** (or far apart on the same chromosome).

**Mendel's fourth postulate (modern extension):** genes can be **linked** on the same chromosome and therefore not assort independently. Linkage is probabilistic, not absolute.

**How linkage is broken:** during meiosis, **crossing-over** (recombination) swaps DNA segments between homologs. The farther apart two loci are, the more likely recombination separates them.

**Linkage disequilibrium (LD)** = non-random association of alleles at different loci. If allele A at one locus and allele B at another occur together more often than expected by chance, loci are in LD.

LD can arise from:
- physical linkage
- recent admixture between populations
- selection on multi-locus haplotypes
- founder events / bottlenecks / drift

LD decays over generations through recombination, so LD patterns can reveal demographic history and recent selection.`,
        },
        {
          title:"Gene Flow, Drift, Admixture & Levels of Selection",
          body:`**Gene flow / dispersal**: movement of individuals (or gametes) between populations that leads to mating and allele transfer. Gene flow tends to reduce genetic differences among populations and can reintroduce variation lost by drift.

**Admixture**: gene flow between previously separated populations, producing mixed ancestry and novel allele combinations.

**Genetic drift**: strongest in small populations. Two classic drift scenarios:
- **Founder effect** — new population started by few individuals → reduced variation + unusual allele frequencies.
- **Bottleneck** — large population sharply reduced by catastrophe/disease/hunting → random loss of alleles, then recovery from a genetically narrowed base.

**Phenotypic variation frameworks:**
- **Continuous variation** (quantitative): many genes + environment (polygenic traits like height)
- **Discrete variation**: few genes with categorical outcomes

**Pleiotropy vs polygenic:**
- **Pleiotropy**: one gene influences multiple traits
- **Polygenic**: many genes influence one trait

**At what levels can selection act?**
- **Gene-level** (selfish elements)
- **Individual-level** (most classic Darwinian selection)
- **Kin-level** (inclusive fitness)
- **Group-level** (more controversial; context-dependent)

In exam framing, emphasize individual-level selection as the default and explain exceptions clearly.`,
        },
      ],
      terms:[
        {term:"Evolutionary mechanisms",def:"The four processes that change allele frequencies: natural selection, mutation, gene flow, and genetic drift."},
        {term:"Mutation",def:"Heritable DNA sequence change; ultimate source of new alleles."},
        {term:"Point mutation",def:"Change in a single nucleotide base in DNA."},
        {term:"Insertion",def:"Addition of one or more nucleotides into a DNA sequence."},
        {term:"Deletion",def:"Loss of one or more nucleotides from DNA."},
        {term:"Duplication",def:"Copying of a DNA segment, creating extra genomic copies."},
        {term:"Beneficial / Deleterious / Neutral",def:"Fitness effect categories of mutations: increases fitness, decreases fitness, or has little no effect."},
        {term:"Directional selection",def:"Selection favoring one extreme phenotype, shifting the trait mean."},
        {term:"Stabilizing selection",def:"Selection favoring intermediate phenotypes and removing extremes."},
        {term:"Disruptive selection",def:"Selection favoring both extremes over intermediate phenotypes."},
        {term:"Independent assortment",def:"Mendelian principle that alleles of different genes sort independently when not tightly linked."},
        {term:"Linkage",def:"Tendency of loci on the same chromosome to be inherited together."},
        {term:"Linkage disequilibrium (LD)",def:"Non-random association of alleles at different loci in a population."},
        {term:"Gene flow",def:"Movement of alleles among populations through migration and reproduction."},
        {term:"Dispersal",def:"Movement of individuals/gametes across space; may produce gene flow if mating occurs."},
        {term:"Admixture",def:"Interbreeding between previously separated populations, mixing ancestry."},
        {term:"Genetic drift",def:"Random allele-frequency change due to chance, strongest in small populations."},
        {term:"Founder effect",def:"Drift caused by establishment of a new population by few individuals."},
        {term:"Genetic bottleneck",def:"Sharp reduction in population size causing random loss of variation."},
        {term:"Pleiotropy",def:"One gene affects multiple distinct phenotypic traits."},
        {term:"Polygenic trait",def:"Single trait influenced by many genes, often producing continuous variation."},
      ],
      quiz:[
        {q:"What are the four primary mechanisms of evolutionary change?",a:"Natural selection, mutation, gene flow, and genetic drift. All can change allele frequencies, but only natural selection consistently produces adaptation."},
        {q:"What is Mendel's fourth postulate in modern genetics context?",a:"Genes can be linked on the same chromosome and therefore may not assort independently. Independent assortment holds reliably for genes on different chromosomes (or very far apart on the same one)."},
        {q:"How can linkage be broken?",a:"By recombination (crossing-over) during meiosis. The farther apart two loci are on a chromosome, the more likely crossing-over separates them."},
        {q:"Define linkage disequilibrium and name two causes.",a:"LD is non-random association of alleles at different loci. Causes include physical linkage, recent admixture, selection on haplotypes, founder effects, and bottlenecks."},
        {q:"Compare directional, stabilizing, and disruptive selection.",a:"Directional favors one extreme and shifts the mean; stabilizing favors intermediates and reduces variance; disruptive favors both extremes and can increase variance and divergence."},
        {q:"What is the difference between founder effect and bottleneck?",a:"Founder effect occurs when a small group starts a new population; bottleneck occurs when a once-large population is sharply reduced. Both are drift processes that reduce variation and alter allele frequencies by chance."},
        {q:"How is new variation introduced to a population?",a:"Primarily by mutation; reshuffled by recombination and independent assortment; and imported by gene flow/admixture from other populations."},
        {q:"What is the difference between pleiotropic and polygenic traits?",a:"Pleiotropy: one gene affects multiple traits. Polygenic: many genes affect one trait (often continuous traits like height)."},
      ],
    },
  },
  {
    id:8, title:"Species Concepts & Speciation", emoji:"🧭", color:"#8fe3b0",
    content:{
      sections:[
        {
          title:"Species Concepts: Definitions, Proposers, Strengths",
          body:`There is no single perfect species concept for all life. Scientists use different concepts depending on data and organism type.

**Biological Species Concept (BSC)** — Ernst Mayr
Species are groups of actually or potentially interbreeding natural populations that are reproductively isolated from other such groups.
Best for living, sexually reproducing organisms.

**Ecological Species Concept (ESC)** — Leigh Van Valen (and related ecological formulations)
Species are lineages occupying distinct ecological niches.
Useful when niche differentiation is clear, even if some hybridization occurs.

**Mate Recognition Species Concept (MRSC)** — Hugh Paterson
Species are populations sharing a common fertilization/mate recognition system.
Focuses on mating signals and compatibility mechanisms.

**Phylogenetic Species Concept (PSC)** — Joel Cracraft (modern cladistic usage)
Species are the smallest diagnosable monophyletic lineages with a shared evolutionary history.
Widely used with DNA + morphology; can identify cryptic species.

**Preferred in practice?** Many scientists use an **integrative approach** (multiple lines of evidence). For classic intro anthropology exams, BSC is often treated as the default for sexually reproducing taxa, but PSC is heavily used in modern systematics.`,
        },
        {
          title:"Speciation Pathways & Isolation",
          body:`**Speciation** = evolution of reproductive isolation between populations.

**Allopatric speciation** — Geographic barrier fully separates populations (mountains, rivers, islands). Gene flow drops to near zero; drift + selection + mutation diverge populations.

**Peripatric speciation** — Small peripheral isolate breaks off from a larger population. Strong founder effects + drift can accelerate divergence.

**Parapatric speciation** — Adjacent populations diverge along an environmental gradient with limited gene flow at a contact zone.

**Sympatric speciation** — Speciation without geographic separation; isolation evolves within same area (e.g., host shift, disruptive selection, assortative mating, polyploidy in plants).

**Prezygotic barriers** (prevent mating/fertilization): habitat, temporal, behavioral, mechanical, gametic isolation.

**Postzygotic barriers** (after fertilization): reduced hybrid viability, reduced hybrid fertility, hybrid breakdown.

Speciation usually requires prolonged reduction of gene flow plus independent evolutionary trajectories.`,
        },
        {
          title:"Anagenesis, Cladogenesis, Microevolution, Macroevolution",
          body:`**Anagenesis** — Linear transformation of one lineage into another over time (no branching increase in species number).

**Cladogenesis** — Branching event where one lineage splits into two or more lineages (increases biodiversity).

**Microevolution** — Small-scale allele-frequency change within populations (selection, drift, mutation, gene flow).

**Macroevolution** — Large-scale patterns above species level over deep time (speciation, extinction, radiations, major transitions).

Key connection: macroevolutionary patterns emerge from repeated microevolutionary processes plus lineage splitting/extinction over long timescales.`,
        },
        {
          title:"Role of Gene Flow & Drift in Species Formation",
          body:`**Gene flow** generally counteracts speciation by homogenizing populations. If migration remains high, divergence is slowed.

**Drift** can accelerate divergence when populations are small or isolated, especially after founder events and bottlenecks.

**Founder effect in speciation context:** a tiny colonizing population starts with a non-representative allele sample. Rapid frequency shifts can alter mating signals, ecological traits, and compatibility.

**Bottleneck context:** severe population reduction strips variation and changes allele frequencies randomly; subsequent isolated recovery can push populations onto distinct evolutionary paths.

**Admixture after divergence:** secondary contact can create hybrid zones; outcomes include fusion, stable hybrid zones, or reinforcement (stronger reproductive isolation).

Exam logic: ask whether gene flow is high or low, whether barriers are present, and whether drift/selection are likely strong enough to produce isolation.`,
        },
      ],
      terms:[
        {term:"Biological Species Concept",def:"Ernst Mayr's concept: species are interbreeding populations reproductively isolated from others."},
        {term:"Ecological Species Concept",def:"Species defined by distinct ecological niches and adaptive zones."},
        {term:"Mate Recognition Species Concept",def:"Species defined by shared mate/fertilization recognition systems."},
        {term:"Phylogenetic Species Concept",def:"Smallest diagnosable monophyletic evolutionary lineage."},
        {term:"Integrative taxonomy",def:"Combining genetic, morphological, ecological, and behavioral evidence to delimit species."},
        {term:"Speciation",def:"Evolution of reproductive isolation producing distinct species."},
        {term:"Allopatric speciation",def:"Speciation caused by geographic isolation."},
        {term:"Peripatric speciation",def:"Speciation in a small peripheral isolate; often involves founder effects."},
        {term:"Parapatric speciation",def:"Speciation between adjacent populations with limited gene flow."},
        {term:"Sympatric speciation",def:"Speciation within the same geographic area without physical barrier."},
        {term:"Prezygotic isolation",def:"Barriers preventing mating/fertilization (behavioral, temporal, habitat, etc.)."},
        {term:"Postzygotic isolation",def:"Barriers after fertilization (hybrid inviability/sterility/breakdown)."},
        {term:"Anagenesis",def:"Linear evolutionary transformation without branching."},
        {term:"Cladogenesis",def:"Branching lineage splitting that increases species diversity."},
        {term:"Microevolution",def:"Within-population allele-frequency change over generations."},
        {term:"Macroevolution",def:"Evolutionary patterns above species level over deep time, including speciation and extinction."},
        {term:"Hybrid zone",def:"Region where diverged populations meet and interbreed."},
        {term:"Reinforcement",def:"Selection strengthening prezygotic barriers when hybrids have reduced fitness."},
      ],
      quiz:[
        {q:"What are the differences among BSC, ESC, MRSC, and PSC?",a:"BSC (Mayr) defines species by interbreeding/reproductive isolation; ESC defines species by distinct niches; MRSC focuses on mate-recognition systems; PSC defines smallest diagnosable monophyletic lineages. Each captures different biological dimensions and works best in different contexts."},
        {q:"Which species concept is generally preferred by scientists?",a:"In modern practice, many prefer an integrative approach combining multiple concepts. For sexually reproducing living populations, BSC is a common default in teaching; for systematics and DNA-based delimitation, PSC is widely used."},
        {q:"What is the difference between anagenesis and cladogenesis?",a:"Anagenesis is linear transformation within one lineage without increasing species number. Cladogenesis is branching divergence into two or more lineages, increasing biodiversity."},
        {q:"Name and distinguish the four major forms of speciation.",a:"Allopatric (geographic isolation), peripatric (small peripheral isolate), parapatric (adjacent populations along gradient with limited gene flow), sympatric (within same area, often via ecological/behavioral divergence)."},
        {q:"How do gene flow and genetic drift influence speciation?",a:"Gene flow usually resists divergence by homogenizing populations; drift promotes divergence in small isolated populations, especially under founder effects and bottlenecks."},
        {q:"Differentiate microevolution and macroevolution.",a:"Microevolution is allele-frequency change within populations. Macroevolution is large-scale lineage patterns (speciation/extinction/radiation) across deep time; macro patterns arise from micro processes plus branching and extinction."},
        {q:"What is reinforcement in speciation?",a:"When hybrids have reduced fitness, natural selection favors stronger prezygotic barriers, reducing hybridization and strengthening reproductive isolation."},
      ],
    },
  },
];

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function BioAnthStudy() {
  const [activeLecture, setActiveLecture] = useState(0);
  const [mode, setMode] = useState("Overview");
  const [activeSection, setActiveSection] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [quizDone, setQuizDone] = useState(false);
  const [personIndex, setPersonIndex] = useState(0);
  const [showPersonAnswer, setShowPersonAnswer] = useState(false);

  const lecture = LECTURES[activeLecture];
  const lc = lecture.content;
  const allVocabulary = LECTURES.flatMap(lec =>
    lec.content.terms.map(t => ({
      ...t,
      lectureId: lec.id,
      lectureTitle: lec.title,
      lectureColor: lec.color,
      lectureEmoji: lec.emoji,
    }))
  );
  const uniqueVocabulary = Array.from(
    new Map(allVocabulary.map(v => [v.term.toLowerCase(), v])).values()
  );

  // Clamp activeSection so it's always valid for the current lecture
  const safeSection = Math.min(activeSection, lc.sections.length - 1);

  // Derive available modes and clamp current mode
  const availableModes = ["Overview", "Flashcards", "Quiz", "Vocabulary"];
  if (lc.people) availableModes.push("People");
  const effectiveMode = availableModes.includes(mode) ? mode : "Overview";

  // Reset ALL per-lecture state synchronously via key trick — useEffect fires
  // after render so we also clamp values above to prevent crashes mid-render
  useEffect(() => {
    setMode("Overview");
    setActiveSection(0);
    setCardIndex(0);
    setFlipped(false);
    setQuizIndex(0);
    setShowAnswer(false);
    setQuizScore({ correct: 0, total: 0 });
    setQuizDone(false);
    setPersonIndex(0);
    setShowPersonAnswer(false);
  }, [activeLecture]);

  function renderMd(text) {
    return text.split("\n").map((line, i) => {
      if (line.trim() === "") return <br key={i} />;
      if (line.startsWith("| ")) return null;
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((p, j) =>
        p.startsWith("**") && p.endsWith("**")
          ? <strong key={j} style={{ color: lecture.color, fontWeight: 700 }}>{p.slice(2, -2)}</strong>
          : p
      );
      return <p key={i} style={{ marginBottom: "0.3rem", lineHeight: 1.75, color: "#c0c0c0", fontSize: "0.9rem" }}>{rendered}</p>;
    });
  }

  const imgKey = `${lecture.id}-${safeSection}`;
  const layoutMaxWidth = "min(1180px, 100%)";
  const contentMaxWidth = "min(1000px, 100%)";
  const layoutPadding = "clamp(0.75rem, 2.5vw, 1.5rem)";

  return (
    <div style={{ minHeight: "100vh", width: "100%", overflowX: "hidden", background: "#07070e", fontFamily: "'DM Sans', sans-serif", color: "white" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .flip-card{perspective:1200px;}
        .fi{transition:transform .55s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d;position:relative;height:100%;}
        .fi.flipped{transform:rotateY(180deg);}
        .ff{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.75rem;text-align:center;}
        .fb{transform:rotateY(180deg);}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-thumb{background:#1a1a2a;border-radius:2px;}
        button{font-family:inherit;cursor:pointer;}
        .lb:hover{transform:translateY(-2px);}
        .lb,.mb{transition:transform .15s;}
        .mb:hover{transform:translateY(-1px);}
        .tc{transition:border-color .15s,background .15s;}
        .tc:hover{border-color:#252535!important;background:#10101e!important;}
      `}</style>

      {/* Header */}
      <div style={{ background: "#09091a", borderBottom: "1px solid #141428", padding: "1.1rem 0 0.9rem" }}>
        <div style={{ width: layoutMaxWidth, margin: "0 auto", padding: `0 ${layoutPadding}` }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.15rem,2.4vw,1.7rem)", fontWeight: 900, letterSpacing: "-.02em", background: "linear-gradient(130deg,#fff 30%,#777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Biological Anthropology — Exam Prep
          </h1>
          <p style={{ color: "#444", fontSize: "0.75rem", marginTop: "0.18rem" }}>{LECTURES.length} Lectures · Notes · Diagrams · Flashcards · Quizzes</p>
        </div>
      </div>

      {/* Lecture Tabs */}
      <div style={{ background: "#09091a", borderBottom: "1px solid #141428", padding: "0.7rem 0" }}>
        <div style={{ width: layoutMaxWidth, margin: "0 auto", padding: `0 ${layoutPadding}` }}>
          <div style={{ display: "flex", overflowX: "auto", gap: "0.45rem", scrollbarWidth: "none" }}>
            {LECTURES.map((lec, i) => (
              <button key={i} className="lb" onClick={() => setActiveLecture(i)} style={{
                flexShrink: 0, padding: "0.45rem 0.85rem", borderRadius: "9px", fontSize: "0.76rem", fontWeight: 600,
                border: activeLecture === i ? `2px solid ${lec.color}` : "2px solid #1a1a28",
                background: activeLecture === i ? `${lec.color}18` : "#0e0e1a",
                color: activeLecture === i ? lec.color : "#555",
              }}>
                {lec.emoji} L{lec.id}: {lec.title.split(" ").slice(0, 3).join(" ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mode Tabs */}
      <div style={{ padding: "0.7rem 0 0" }}>
        <div style={{ width: layoutMaxWidth, margin: "0 auto", padding: `0 ${layoutPadding}` }}>
          <div style={{ display: "flex", gap: "0.38rem", flexWrap: "wrap" }}>
            {availableModes.map(m => (
              <button key={m} className="mb" onClick={() => setMode(m)} style={{
                padding: "0.38rem 0.8rem", borderRadius: "7px", fontSize: "0.76rem", fontWeight: 600,
                border: effectiveMode === m ? `1.5px solid ${lecture.color}` : "1.5px solid #1a1a28",
                background: effectiveMode === m ? `${lecture.color}1e` : "transparent",
                color: effectiveMode === m ? lecture.color : "#4a4a6a",
              }}>
                {m === "Overview" ? "📖 Notes" : m === "Flashcards" ? "🃏 Flashcards" : m === "Quiz" ? "✅ Quiz" : m === "Vocabulary" ? "📚 Vocabulary" : "👤 People"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: contentMaxWidth, margin: "0 auto", padding: `1.1rem ${layoutPadding} 4rem` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem,2.3vw,1.45rem)", fontWeight: 700, margin: "0 0 1.1rem", color: lecture.color }}>
          {lecture.emoji} Lecture {lecture.id}: {lecture.title}
        </h2>

        {/* ══ OVERVIEW ══ */}
        {effectiveMode === "Overview" && (
          <div>
            <div style={{ display: "flex", gap: "0.38rem", flexWrap: "wrap", marginBottom: "1.1rem" }}>
              {lc.sections.map((sec, i) => (
                <button key={i} onClick={() => setActiveSection(i)} style={{
                  padding: "0.32rem 0.75rem", borderRadius: "18px", fontSize: "0.73rem", fontWeight: 600,
                  border: safeSection === i ? `1.5px solid ${lecture.color}` : "1.5px solid #1a1a28",
                  background: safeSection === i ? `${lecture.color}18` : "#0e0e1a",
                  color: safeSection === i ? lecture.color : "#555",
                }}>
                  {sec.title.split(" ").slice(0, 4).join(" ")}
                </button>
              ))}
            </div>
            <div style={{ background: "#0c0c1a", borderRadius: "13px", padding: "1.15rem 1.3rem", border: `1px solid ${lecture.color}25`, marginBottom: "1.4rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: lecture.color, marginBottom: "0.9rem", fontSize: "1rem" }}>
                {lc.sections[safeSection].title}
              </h3>
              {SECTION_IMAGES[imgKey] && (
                <div style={{ background: "#080814", borderRadius: "9px", padding: "0.9rem", marginBottom: "1.1rem", border: "1px solid #1a1a28" }}>
                  {SECTION_IMAGES[imgKey]}
                </div>
              )}
              <div>{renderMd(lc.sections[safeSection].body)}</div>
            </div>
            <h3 style={{ color: "#444", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Key Terms</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: "0.55rem" }}>
              {lc.terms.map((t, i) => (
                <div key={i} className="tc" style={{ background: "#0c0c1a", borderRadius: "9px", padding: "0.7rem 0.85rem", border: "1px solid #171727" }}>
                  <div style={{ color: lecture.color, fontWeight: 700, fontSize: "0.8rem", marginBottom: "0.28rem" }}>{t.term}</div>
                  <div style={{ color: "#777", fontSize: "0.76rem", lineHeight: 1.55 }}>{t.def}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ FLASHCARDS ══ */}
        {effectiveMode === "Flashcards" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.65rem" }}>
              <span style={{ color: "#444", fontSize: "0.8rem" }}>Card {cardIndex + 1} / {lc.terms.length}</span>
              <div style={{ display: "flex", gap: "0.38rem" }}>
                {[["← Prev", () => { setCardIndex(Math.max(0, cardIndex - 1)); setFlipped(false); }, cardIndex === 0],
                  ["Next →", () => { setCardIndex(Math.min(lc.terms.length - 1, cardIndex + 1)); setFlipped(false); }, cardIndex === lc.terms.length - 1]
                ].map(([label, fn, dis]) => (
                  <button key={label} onClick={fn} disabled={dis} style={{ padding: "0.32rem 0.75rem", borderRadius: "7px", border: "1px solid #1a1a28", background: "#0e0e1a", color: dis ? "#282838" : "#999", fontSize: "0.76rem" }}>{label}</button>
                ))}
              </div>
            </div>
            <div style={{ height: "3px", background: "#0e0e1a", borderRadius: "2px", marginBottom: "1.1rem" }}>
              <div style={{ height: "100%", width: `${((cardIndex + 1) / lc.terms.length) * 100}%`, background: lecture.color, borderRadius: "2px", transition: "width .3s" }} />
            </div>
            <div className="flip-card" style={{ height: "250px" }} onClick={() => setFlipped(f => !f)}>
              <div className={`fi ${flipped ? "flipped" : ""}`}>
                <div className="ff" style={{ background: "#0c0c1a", border: `2px solid ${lecture.color}30` }}>
                  <div style={{ color: "#333", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.85rem" }}>Term</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem,2.5vw,1.5rem)", fontWeight: 700, color: lecture.color, lineHeight: 1.2 }}>{lc.terms[cardIndex].term}</div>
                  <div style={{ color: "#282838", fontSize: "0.7rem", marginTop: "1rem" }}>Click to reveal →</div>
                </div>
                <div className="ff fb" style={{ background: "#0c0c1a", border: `2px solid ${lecture.color}65` }}>
                  <div style={{ color: "#333", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.85rem" }}>Definition</div>
                  <div style={{ color: "#d0d0d0", fontSize: "0.87rem", lineHeight: 1.65, maxWidth: "460px" }}>{lc.terms[cardIndex].def}</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.35rem", marginTop: "1.1rem", flexWrap: "wrap" }}>
              {lc.terms.map((_, i) => (
                <button key={i} onClick={() => { setCardIndex(i); setFlipped(false); }} style={{
                  width: "7px", height: "7px", borderRadius: "50%", border: "none", padding: 0,
                  background: i === cardIndex ? lecture.color : "#1a1a2a",
                  transform: i === cardIndex ? "scale(1.5)" : "scale(1)", transition: "all .15s",
                }} />
              ))}
            </div>
          </div>
        )}

        {/* ══ QUIZ ══ */}
        {effectiveMode === "Quiz" && (
          <div>
            {quizDone ? (
              <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.65rem" }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: lecture.color, marginBottom: "0.35rem" }}>
                  {quizScore.correct}/{quizScore.total} Correct
                </h3>
                <p style={{ color: "#555", marginBottom: "1.1rem", fontSize: "0.87rem" }}>
                  {quizScore.correct === quizScore.total ? "Perfect! You've mastered this lecture." :
                    quizScore.correct >= quizScore.total * 0.7 ? "Great job! Review the ones you missed." : "Keep studying — you've got this!"}
                </p>
                <button onClick={() => { setQuizIndex(0); setShowAnswer(false); setQuizScore({ correct: 0, total: 0 }); setQuizDone(false); }}
                  style={{ padding: "0.6rem 1.3rem", borderRadius: "9px", border: `2px solid ${lecture.color}`, background: `${lecture.color}18`, color: lecture.color, fontWeight: 700, fontSize: "0.85rem" }}>
                  Retake Quiz
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.65rem", alignItems: "center" }}>
                  <span style={{ color: "#444", fontSize: "0.8rem" }}>Q{quizIndex + 1} / {lc.quiz.length}</span>
                  <span style={{ color: lecture.color, fontSize: "0.8rem", fontWeight: 700 }}>{quizScore.correct} correct</span>
                </div>
                <div style={{ height: "3px", background: "#0e0e1a", borderRadius: "2px", marginBottom: "1.1rem" }}>
                  <div style={{ height: "100%", width: `${(quizIndex / lc.quiz.length) * 100}%`, background: lecture.color, borderRadius: "2px", transition: "width .3s" }} />
                </div>
                <div style={{ background: "#0c0c1a", borderRadius: "12px", padding: "1.1rem", border: `1px solid ${lecture.color}25`, marginBottom: "0.65rem" }}>
                  <div style={{ color: "#333", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.55rem" }}>Question</div>
                  <p style={{ fontSize: "0.95rem", fontWeight: 500, lineHeight: 1.65, color: "#e8e8e8" }}>{lc.quiz[quizIndex].q}</p>
                </div>
                {!showAnswer ? (
                  <button onClick={() => setShowAnswer(true)} style={{
                    width: "100%", padding: "0.8rem", borderRadius: "11px", fontWeight: 700, fontSize: "0.87rem",
                    border: `2px solid ${lecture.color}50`, background: `${lecture.color}10`, color: lecture.color,
                  }}>Reveal Answer</button>
                ) : (
                  <div>
                    <div style={{ background: "#0a180c", borderRadius: "12px", padding: "1.1rem", border: "1px solid #1a3a1e", marginBottom: "0.65rem" }}>
                      <div style={{ color: "#3a7a3a", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.55rem" }}>Answer</div>
                      <p style={{ color: "#a8d8a8", lineHeight: 1.7, fontSize: "0.9rem" }}>{lc.quiz[quizIndex].a}</p>
                    </div>
                    <div style={{ display: "flex", gap: "0.55rem" }}>
                      {[
                        ["✓ Got it", "#3a7a3a", "#0a1a0c", "#7acc7a",
                          () => { setQuizScore(s => ({ ...s, correct: s.correct + 1, total: s.total + 1 })); quizIndex + 1 >= lc.quiz.length ? setQuizDone(true) : (setQuizIndex(q => q + 1), setShowAnswer(false)); }],
                        ["✗ Missed it", "#7a3a3a", "#1a0a0c", "#cc7a7a",
                          () => { setQuizScore(s => ({ ...s, total: s.total + 1 })); quizIndex + 1 >= lc.quiz.length ? setQuizDone(true) : (setQuizIndex(q => q + 1), setShowAnswer(false)); }],
                      ].map(([label, border, bg, color, fn]) => (
                        <button key={label} onClick={fn} style={{ flex: 1, padding: "0.65rem", borderRadius: "9px", fontWeight: 700, fontSize: "0.85rem", border: `2px solid ${border}`, background: bg, color }}>{label}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ══ PEOPLE (L2 only) ══ */}
        {effectiveMode === "People" && lc.people && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.65rem" }}>
              <span style={{ color: "#444", fontSize: "0.8rem" }}>Person {personIndex + 1} / {lc.people.length}</span>
              <div style={{ display: "flex", gap: "0.38rem" }}>
                {[["← Prev", () => { setPersonIndex(p => Math.max(0, p - 1)); setShowPersonAnswer(false); }, personIndex === 0],
                  ["Next →", () => { setPersonIndex(p => Math.min(lc.people.length - 1, p + 1)); setShowPersonAnswer(false); }, personIndex === lc.people.length - 1]
                ].map(([label, fn, dis]) => (
                  <button key={label} onClick={fn} disabled={dis} style={{ padding: "0.32rem 0.75rem", borderRadius: "7px", border: "1px solid #1a1a28", background: "#0e0e1a", color: dis ? "#282838" : "#999", fontSize: "0.76rem" }}>{label}</button>
                ))}
              </div>
            </div>
            <div style={{ height: "3px", background: "#0e0e1a", borderRadius: "2px", marginBottom: "1.1rem" }}>
              <div style={{ height: "100%", width: `${((personIndex + 1) / lc.people.length) * 100}%`, background: lecture.color, borderRadius: "2px", transition: "width .3s" }} />
            </div>
            <div style={{ background: "#0c0c1a", borderRadius: "16px", padding: "1.6rem", border: `2px solid ${lecture.color}35`, textAlign: "center", marginBottom: "0.9rem" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.45rem" }}>🧑‍🔬</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: lecture.color, marginBottom: "0.3rem" }}>{lc.people[personIndex].name}</h3>
              <p style={{ color: "#333", fontSize: "0.75rem", marginBottom: "1.1rem" }}>What was their major scientific contribution?</p>
              {!showPersonAnswer ? (
                <button onClick={() => setShowPersonAnswer(true)} style={{ padding: "0.55rem 1.2rem", borderRadius: "9px", border: `2px solid ${lecture.color}50`, background: `${lecture.color}10`, color: lecture.color, fontWeight: 700, fontSize: "0.85rem" }}>Reveal Contribution</button>
              ) : (
                <div style={{ background: "#0e141a", borderRadius: "9px", padding: "0.85rem 1.1rem", border: `1px solid ${lecture.color}30` }}>
                  <p style={{ color: "#d0d0d0", lineHeight: 1.65, fontSize: "0.9rem" }}>{lc.people[personIndex].contribution}</p>
                </div>
              )}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: "0.45rem" }}>
              {lc.people.map((p, i) => (
                <button key={i} onClick={() => { setPersonIndex(i); setShowPersonAnswer(false); }} style={{
                  padding: "0.55rem 0.85rem", borderRadius: "7px", textAlign: "left",
                  border: i === personIndex ? `1.5px solid ${lecture.color}` : "1.5px solid #141428",
                  background: i === personIndex ? `${lecture.color}15` : "#0c0c1a",
                  color: i === personIndex ? lecture.color : "#555", fontSize: "0.78rem", fontWeight: i === personIndex ? 700 : 400,
                }}>{p.name}</button>
              ))}
            </div>
          </div>
        )}

        {/* ══ VOCABULARY (ALL LECTURES) ══ */}
        {effectiveMode === "Vocabulary" && (
          <div>
            <div style={{ background: "#0c0c1a", borderRadius: "13px", padding: "1rem 1.1rem", border: "1px solid #1c1c2c", marginBottom: "0.95rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#9ad1ff", marginBottom: "0.35rem", fontSize: "1rem" }}>All Vocabulary Review (One Section)</h3>
              <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.65 }}>
                Combined vocabulary from all lectures in one place. Total unique terms: <strong style={{ color: "#9ad1ff" }}>{uniqueVocabulary.length}</strong>.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: "0.55rem" }}>
              {uniqueVocabulary.map((v, i) => (
                <div key={`${v.term}-${i}`} className="tc" style={{ background: "#0c0c1a", borderRadius: "9px", padding: "0.75rem 0.85rem", border: "1px solid #171727" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.32rem", gap: "0.45rem" }}>
                    <div style={{ color: v.lectureColor, fontWeight: 700, fontSize: "0.8rem" }}>{v.term}</div>
                    <div style={{ color: "#555", fontSize: "0.67rem", whiteSpace: "nowrap" }}>{v.lectureEmoji} L{v.lectureId}</div>
                  </div>
                  <div style={{ color: "#777", fontSize: "0.76rem", lineHeight: 1.55, marginBottom: "0.3rem" }}>{v.def}</div>
                  <div style={{ color: "#444", fontSize: "0.68rem" }}>{v.lectureTitle}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}