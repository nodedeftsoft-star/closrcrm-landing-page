import svgPaths from "./svg-v6q1gr6wqx";

function Logo() {
  return (
    <div className="css-wc1msa min-w-[32px] size-[32px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Logo">
          <rect fill="var(--fill-0, #3C8DFF)" height="31" rx="7.5" width="31" x="0.5" y="0.5" />
          <rect height="31" rx="7.5" stroke="var(--stroke-0, #3C8DFF)" width="31" x="0.5" y="0.5" />
          <path d={svgPaths.p5609000} fill="var(--fill-0, white)" id="C" />
        </g>
      </svg>
    </div>
  );
}

function LogoFrameSideNav() {
  return (
    <div className="css-5knerd w-full" data-name="Logo Frame Side Nav">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv p-[20px] w-full">
          <Logo />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Icons() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6863" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6863)">
            <path d={svgPaths.p3c783a00} fill="var(--fill-0, #07192C)" id="dashboard" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon() {
  return (
    <div className="css-paq0kv css-snkgse h-[22px]" data-name="Text with Icon">
      <Icons />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="css-paq0kv css-sf5ny4 h-[40px] px-0 py-[8px] w-[72px]" data-name="Dashboard">
      <div className="css-wc1msa h-[40px] w-[2px]" />
      <TextWithIcon />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function Icons1() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.p28ea4700} id="Vector" stroke="var(--stroke-0, #07192C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon1() {
  return (
    <div className="css-paq0kv css-snkgse h-[22px]" data-name="Text with Icon">
      <Icons1 />
    </div>
  );
}

function Leads() {
  return (
    <div className="css-paq0kv css-sf5ny4 h-[40px] px-0 py-[8px] w-[72px]" data-name="Leads">
      <div className="css-wc1msa h-[40px] w-[2px]" />
      <TextWithIcon1 />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function Icons2() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_7064" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_7064)">
            <path d={svgPaths.p1126c880} fill="var(--fill-0, #3C8DFF)" id="local_mall" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon2() {
  return (
    <div className="css-paq0kv css-snkgse h-[22px]" data-name="Text with Icon">
      <Icons2 />
    </div>
  );
}

function BuyersAgent() {
  return (
    <div className="bg-[#f0f6ff] css-paq0kv css-sf5ny4 h-[40px] px-0 py-[8px] w-[72px]" data-name="Buyer\'s Agent">
      <div aria-hidden="true" className="border-[#e5e8eb] css-5npf0s css-s3s1qq inset-0" />
      <div className="bg-[#3c8dff] css-wc1msa h-[40px] w-[2px]" />
      <TextWithIcon2 />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function Icons3() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6893" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6893)">
            <path d={svgPaths.p2eaef3a0} fill="var(--fill-0, #07192C)" id="real_estate_agent" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon3() {
  return (
    <div className="css-paq0kv css-snkgse h-[22px]" data-name="Text with Icon">
      <Icons3 />
    </div>
  );
}

function SellersAgent() {
  return (
    <div className="css-paq0kv css-sf5ny4 h-[40px] px-0 py-[8px] w-[72px]" data-name="Seller\'s Agent">
      <div className="css-wc1msa h-[40px] w-[2px]" />
      <TextWithIcon3 />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function Icons4() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6871" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6871)">
            <path d={svgPaths.p2bb059f0} fill="var(--fill-0, #07192C)" id="graph_1" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon4() {
  return (
    <div className="css-paq0kv css-snkgse h-[22px]" data-name="Text with Icon">
      <Icons4 />
    </div>
  );
}

function Matches() {
  return (
    <div className="css-paq0kv css-sf5ny4 h-[40px] px-0 py-[8px] w-[72px]" data-name="Matches">
      <div className="css-wc1msa h-[40px] w-[2px]" />
      <TextWithIcon4 />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function Icons5() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_7056" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_7056)">
            <path d={svgPaths.pd0d8400} fill="var(--fill-0, #07192C)" id="assignment_ind" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon5() {
  return (
    <div className="css-paq0kv css-snkgse h-[22px]" data-name="Text with Icon">
      <Icons5 />
    </div>
  );
}

function Rolodex() {
  return (
    <div className="css-paq0kv css-sf5ny4 h-[40px] px-0 py-[8px] w-[72px]" data-name="Rolodex">
      <div className="css-wc1msa h-[40px] w-[2px]" />
      <TextWithIcon5 />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function TopMenu() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv gap-[16px] px-0 py-[32px] w-full" data-name="Top Menu">
      <Dashboard />
      <Leads />
      <BuyersAgent />
      <SellersAgent />
      <Matches />
      <Rolodex />
    </div>
  );
}

function Spacer() {
  return <div className="css-myl2ny min-h-px min-w-px w-[72px]" data-name="Spacer" />;
}

function Icons6() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6911" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6911)">
            <path d={svgPaths.p35ffa9f0} fill="var(--fill-0, #07192C)" id="account_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon6() {
  return (
    <div className="css-paq0kv css-snkgse h-[22px]" data-name="Text with Icon">
      <Icons6 />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="css-paq0kv css-sf5ny4 h-[40px] px-0 py-[8px] w-[72px]" data-name="User Profile">
      <div className="css-wc1msa h-[40px] w-[2px]" />
      <TextWithIcon6 />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function BottomMenu() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv px-0 py-[32px] w-full" data-name="Bottom Menu">
      <UserProfile />
    </div>
  );
}

function SideNav() {
  return (
    <div className="bg-[#f9f9f9] css-dczajm css-paq0kv h-[1024px]" data-name="Side Nav">
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-trre33 inset-0" />
      <LogoFrameSideNav />
      <TopMenu />
      <Spacer />
      <BottomMenu />
    </div>
  );
}

function TypographyComp() {
  return (
    <div className="css-17xzu7 css-paq0kv left-[16px] top-0" data-name="Typography Comp">
      <div className="css-fo7v9t css-skt1ck css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-wwciga">Buyer’s Agent - Matches</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="css-wc1msa h-[33px] w-[195px]">
      <TypographyComp />
    </div>
  );
}

function RenterIllustration() {
  return (
    <div className="css-wc1msa h-[72px] w-[661px]" data-name="renter illustration">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 661 72">
        <g clipPath="url(#clip0_1_6922)" id="renter illustration">
          <path d={svgPaths.p3c3405c0} id="Vector" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          <g id="Group 48">
            <path d={svgPaths.p1ea6da00} id="Vector_2" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p14c7f70c} id="Vector_3" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p26d7db00} id="Vector_4" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2619a80} id="Vector_5" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3e556aa0} id="Vector_6" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M442.823 44.7611V74.8774" id="Vector_7" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Group 49">
            <path d={svgPaths.p588c7c0} id="Vector_8" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p8a96ca0} id="Vector_9" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3a035e80} id="Vector_10" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p4a2eac0} id="Vector_11" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p35378d00} id="Vector_12" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3e522800} id="Vector_13" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1deb2600} id="Vector_14" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p18b78300} id="Vector_15" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p201ca480} id="Vector_16" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Group 51">
            <path d={svgPaths.p1969d080} id="Vector_17" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p8ff3680} id="Vector_18" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1c582a00} id="Vector_19" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Group 53">
            <path d={svgPaths.p24631b00} id="Vector_20" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p33359660} id="Vector_21" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p22012560} id="Vector_22" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p34913c80} id="Vector_23" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1560cd00} id="Vector_24" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p338cd000} id="Vector_25" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p399a180} id="Vector_26" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p58f3b52} id="Vector_27" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p9ee2480} id="Vector_28" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p65366c0} id="Vector_29" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p175bac80} id="Vector_30" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p158bfcc0} id="Vector_31" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p13712e00} id="Vector_32" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p767bd50} id="Vector_33" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pe552000} id="Vector_34" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2fa4da00} id="Vector_35" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pd03c100} id="Vector_36" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2f38efc0} id="Vector_37" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p18e06c00} id="Vector_38" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M87.0986 40.8641H92.1608" id="Vector_39" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p115c4a80} id="Vector_40" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p372b3b60} id="Vector_41" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Group 47">
            <path d={svgPaths.p24b84680} id="Vector_42" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p113ab940} id="Vector_43" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1c8ecb80} id="Vector_44" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p351e9400} id="Vector_45" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2abb5a88} id="Vector_46" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3afcba80} id="Vector_47" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p30175900} id="Vector_48" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3bdc2600} id="Vector_49" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1a01600} id="Vector_50" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p30d94600} id="Vector_51" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pde9a100} id="Vector_52" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1cd5a800} id="Vector_53" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3f15df00} id="Vector_54" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pe413730} id="Vector_55" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2c28fc8b} id="Vector_56" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Group 46">
            <path d={svgPaths.p1525fbe4} id="Vector_57" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pd343100} id="Vector_58" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p329ccc80} id="Vector_59" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3798ea00} id="Vector_60" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3e03580} id="Vector_61" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3d8c7400} id="Vector_62" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1a4a9700} id="Vector_63" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1d075a00} id="Vector_64" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p18ba800} id="Vector_65" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pa7dfa00} id="Vector_66" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p29bdcc00} id="Vector_67" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p8678300} id="Vector_68" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3ab90d00} id="Vector_69" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2f80c100} id="Vector_70" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p135bab00} id="Vector_71" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3aab0fb8} id="Vector_72" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1681ea80} id="Vector_73" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p36db8700} id="Vector_74" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p739f900} id="Vector_75" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pc0b8c00} id="Vector_76" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3fab4f80} id="Vector_77" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2ccaa380} id="Vector_78" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pe07a5c0} id="Vector_79" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3fc92380} id="Vector_80" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2e0da700} id="Vector_81" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1b274900} id="Vector_82" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p36123200} id="Vector_83" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p13573800} id="Vector_84" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p36cab740} id="Vector_85" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pdd9cb00} id="Vector_86" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3e3eda00} id="Vector_87" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1c6a0500} id="Vector_88" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pa0505a0} id="Vector_89" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p18e9ef80} id="Vector_90" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2a03f980} id="Vector_91" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pfaced00} id="Vector_92" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p30e2ab98} id="Vector_93" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pa408c0} id="Vector_94" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pf515180} id="Vector_95" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pd755300} id="Vector_96" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p4e78e9c} id="Vector_97" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2c01d780} id="Vector_98" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2b7208c0} id="Vector_99" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2653d180} id="Vector_100" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3a315a00} id="Vector_101" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3cbde180} id="Vector_102" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p14c66280} id="Vector_103" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p144ecb00} id="Vector_104" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p363ff180} id="Vector_105" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Group 50">
            <path d={svgPaths.p3c926000} id="Vector_106" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p21e43640} id="Vector_107" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2033d880} id="Vector_108" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M648.287 62.9609H635.455" id="Vector_109" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p14c48480} id="Vector_110" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M630.275 70.0335H623.918" id="Vector_111" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M623.918 56.8314H630.275" id="Vector_112" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p26f9e200} id="Vector_113" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p51c0500} id="Vector_114" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1a8fbb04} id="Vector_115" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2c657b40} id="Vector_116" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p22441160} id="Vector_117" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g id="Group 52">
            <path d={svgPaths.p281cc340} id="Vector_118" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p21ea8580} id="Vector_119" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3701c860} id="Vector_120" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p26e09010} id="Vector_121" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3f74d300} id="Vector_122" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p18026980} id="Vector_123" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1567aa60} id="Vector_124" stroke="var(--stroke-0, #C0CCD8)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_6922">
            <rect fill="white" height="72" width="661" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Page Header">
      <div className="css-2gbjjk css-7abz5d w-full">
        <Frame2 />
        <RenterIllustration />
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-trre33 inset-0" />
    </div>
  );
}

function Icons7() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6897" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6897)">
            <path d={svgPaths.pcb68900} fill="var(--fill-0, #07192C)" id="money_bag" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp1() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Buyer</p>
      </div>
    </div>
  );
}

function LightTextWithIcon() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px] h-[22px]" data-name="Light/Text with Icon">
      <Icons7 />
      <TypographyComp1 />
    </div>
  );
}

function NavMenuItems() {
  return (
    <div className="css-paq0kv css-sf5ny4 h-[40px] pl-[16px] pr-0 py-[8px] w-[192px]" data-name="Nav Menu Items">
      <LightTextWithIcon />
      <div className="css-wc1msa h-[40px] w-[2px]" />
    </div>
  );
}

function Icons8() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6882" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6882)">
            <path d={svgPaths.p38f41100} fill="var(--fill-0, #07192C)" id="move_location" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp2() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Renter</p>
      </div>
    </div>
  );
}

function LightTextWithIcon1() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px] h-[22px]" data-name="Light/Text with Icon">
      <Icons8 />
      <TypographyComp2 />
    </div>
  );
}

function NavMenuItems1() {
  return (
    <div className="bg-[#f0f6ff] css-paq0kv css-snkgse gap-[12px] h-[40px] px-0 py-[8px] w-[192px]" data-name="Nav Menu Items">
      <div aria-hidden="true" className="border-[#e5e8eb] css-5npf0s css-s3s1qq inset-0" />
      <div className="bg-[#3c8dff] css-wc1msa h-[40px] w-[2px]" />
      <LightTextWithIcon1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[16px] w-[192px]">
      <NavMenuItems />
      <NavMenuItems1 />
    </div>
  );
}

function SubNav() {
  return (
    <div className="css-22itc5 css-paq0kv h-[952px] px-0 py-[32px]" data-name="Sub Nav">
      <div aria-hidden="true" className="border-[#e5e8eb] css-5npf0s css-s3s1qq inset-0" />
      <Frame />
    </div>
  );
}

function TypographyComp3() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-98sjzd css-dlxlg7">Home</p>
      </div>
    </div>
  );
}

function TypographyComp4() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">{`>`}</p>
      </div>
    </div>
  );
}

function TypographyComp5() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-98sjzd css-dlxlg7">Buyer’s Agent Portal</p>
      </div>
    </div>
  );
}

function TypographyComp6() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-98sjzd css-dlxlg7">Buyer</p>
      </div>
    </div>
  );
}

function TypographyComp7() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Find Matches</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]" data-name="Breadcrumb">
      <TypographyComp3 />
      <TypographyComp4 />
      <TypographyComp5 />
      <TypographyComp4 />
      <TypographyComp6 />
      <TypographyComp4 />
      <TypographyComp7 />
    </div>
  );
}

function TypographyComp8() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7z82wp css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxksy css-p704bq">Find Matches for</p>
      </div>
    </div>
  );
}

function TypographyComp9() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7z82wp css-kosxdm css-vkpzlc text-[#3c8dff]">
        <p className="css-8zr56v css-98sjzd css-dlxksy">Claudetta Haldane</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]" data-name="Header">
      <TypographyComp8 />
      <TypographyComp9 />
    </div>
  );
}

function TypographyComp10() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Showing 12 Results</p>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="bg-[#e8e8e8] css-paq0kv css-sgrpri h-[24px] p-[8px]" data-name="Badges">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <TypographyComp10 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px]">
      <Header />
      <Badges />
    </div>
  );
}

function Frame8() {
  return (
    <div className="css-paq0kv css-sf5ny4 w-full">
      <Frame10 />
    </div>
  );
}

function TypographyComp11() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-kosxdm css-rlu1og css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">{`Filter `}</p>
      </div>
    </div>
  );
}

function TypographyComp12() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">(7)</p>
      </div>
    </div>
  );
}

function FilterAndNumber() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]" data-name="Filter and Number">
      <TypographyComp11 />
      <TypographyComp12 />
    </div>
  );
}

function TypographyComp13() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#3c8dff]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Clear All</p>
      </div>
    </div>
  );
}

function FilterLeft() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px]" data-name="Filter Left">
      <FilterAndNumber />
      <TypographyComp13 />
    </div>
  );
}

function Icons9() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6875" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6875)">
            <path d={svgPaths.p3a9fe480} fill="var(--fill-0, #07192C)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FilterHeader() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Filter Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[10.5px] w-full">
          <FilterLeft />
          <Icons9 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp14() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Target Area</p>
      </div>
    </div>
  );
}

function Icons10() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6918)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header1() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[12px] w-full">
          <TypographyComp14 />
          <Icons10 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp15() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Bronx</p>
      </div>
    </div>
  );
}

function SelectDropEachItem() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] pl-[32px] pr-[8px] py-[8px] w-full">
          <TypographyComp15 />
        </div>
      </div>
    </div>
  );
}

function TypographyComp16() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Brooklyn</p>
      </div>
    </div>
  );
}

function SelectDropEachItem1() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] pl-[32px] pr-[8px] py-[8px] w-full">
          <TypographyComp16 />
        </div>
      </div>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="icon/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/check">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #07192C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TypographyComp17() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Manhattan</p>
      </div>
    </div>
  );
}

function SelectDropEachItem2() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] p-[8px] w-full">
          <IconCheck />
          <TypographyComp17 />
        </div>
      </div>
    </div>
  );
}

function TypographyComp18() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Staten Island</p>
      </div>
    </div>
  );
}

function SelectDropEachItem3() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] pl-[32px] pr-[8px] py-[8px] w-full">
          <TypographyComp18 />
        </div>
      </div>
    </div>
  );
}

function TypographyComp19() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Queens</p>
      </div>
    </div>
  );
}

function SelectDropEachItem4() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] pl-[32px] pr-[8px] py-[8px] w-full">
          <TypographyComp19 />
        </div>
      </div>
    </div>
  );
}

function FormElements() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Form Elements">
      <div className="css-2gbjjk css-x82mwy w-full">
        <SelectDropEachItem />
        <SelectDropEachItem1 />
        <SelectDropEachItem2 />
        <SelectDropEachItem3 />
        <SelectDropEachItem4 />
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function Header2() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-t8zmbz size-full">
        <div className="css-lprhnl css-paq0kv px-[16px] py-[24px] w-full">
          <FormElements />
        </div>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header1 />
      <Header2 />
    </div>
  );
}

function TypographyComp20() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Neighborhood</p>
      </div>
    </div>
  );
}

function Icons11() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6918)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[12px] w-full">
          <TypographyComp20 />
          <Icons11 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp21() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Select all you prefer</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="css-5knerd w-full" data-name="Search">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv pl-0 pr-[16px] py-0 w-full">
          <TypographyComp21 />
        </div>
      </div>
    </div>
  );
}

function TypographyComp22() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">5 Selected</p>
      </div>
    </div>
  );
}

function EachSelectItem() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Each Select Item">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[16px] py-[14.5px] w-full">
          <TypographyComp22 />
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-t8zmbz size-full">
        <div className="css-lprhnl css-paq0kv gap-[16px] px-[16px] py-[24px] w-full">
          <Search />
          <EachSelectItem />
        </div>
      </div>
    </div>
  );
}

function Filter1() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header3 />
      <Header4 />
    </div>
  );
}

function TypographyComp23() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Rent</p>
      </div>
    </div>
  );
}

function Icons12() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6918)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header5() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[12px] w-full">
          <TypographyComp23 />
          <Icons12 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Label() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Label">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Enter Max. Rent</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="css-5knerd h-[17px] w-full" data-name="Label">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv pl-0 pr-[16px] py-0 size-full">
          <Label />
        </div>
      </div>
    </div>
  );
}

function FormInput() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Form Input">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$5,000</p>
      </div>
    </div>
  );
}

function SpacingFrame() {
  return (
    <div className="css-22itc5 css-paq0kv px-[16px] py-0" data-name="Spacing Frame">
      <FormInput />
    </div>
  );
}

function Icons13() {
  return (
    <div className="css-2chd6x css-roiesn left-1/2 size-[16px] top-1/2" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_4285" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_4285)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NumberIncrease() {
  return (
    <div className="bg-[#f9f9f9] css-wc1msa size-[24px]" data-name="Number Increase">
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-trre33 inset-[-0.5px]" />
      <Icons13 />
    </div>
  );
}

function Icons14() {
  return (
    <div className="css-2chd6x css-roiesn left-1/2 size-[16px] top-1/2" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_4289" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(-90 0 16)" width="16" y="16" />
          </mask>
          <g mask="url(#mask0_1_4289)">
            <path d={svgPaths.pd0b3800} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NumberDecrease() {
  return (
    <div className="bg-[#f9f9f9] css-wc1msa size-[24px]" data-name="Number Decrease">
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-trre33 inset-[-0.5px]" />
      <Icons14 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="css-9uyk0n css-paq0kv">
      <NumberIncrease />
      <NumberDecrease />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white css-iyqo1d h-[48px] w-full" data-name="Input">
      <div className="css-2gbjjk css-7abz5d px-0 py-[14.5px] size-full">
        <SpacingFrame />
        <Frame11 />
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function FormElements1() {
  return (
    <div className="css-2gbjjk css-9uyk0n gap-[8px] px-0 py-[16px] w-full" data-name="Form Elements">
      <Label1 />
      <Input />
    </div>
  );
}

function Header6() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-t8zmbz size-full">
        <div className="css-lprhnl css-paq0kv px-[16px] py-[24px] w-full">
          <FormElements1 />
        </div>
      </div>
    </div>
  );
}

function Filter2() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header5 />
      <Header6 />
    </div>
  );
}

function TypographyComp24() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Home Type</p>
      </div>
    </div>
  );
}

function Icons15() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6918)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header7() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[12px] w-full">
          <TypographyComp24 />
          <Icons15 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp25() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Apartment</p>
      </div>
    </div>
  );
}

function SelectDropEachItem5() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] pl-[32px] pr-[8px] py-[8px] w-full">
          <TypographyComp25 />
        </div>
      </div>
    </div>
  );
}

function IconCheck1() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="icon/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/check">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #07192C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TypographyComp26() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">House</p>
      </div>
    </div>
  );
}

function SelectDropEachItem6() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] p-[8px] w-full">
          <IconCheck1 />
          <TypographyComp26 />
        </div>
      </div>
    </div>
  );
}

function TypographyComp27() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Room</p>
      </div>
    </div>
  );
}

function SelectDropEachItem7() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Select drop each item">
      <div className="css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[8px] pl-[32px] pr-[8px] py-[8px] w-full">
          <TypographyComp27 />
        </div>
      </div>
    </div>
  );
}

function FormElements2() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Form Elements">
      <div className="css-2gbjjk css-x82mwy w-full">
        <SelectDropEachItem5 />
        <SelectDropEachItem6 />
        <SelectDropEachItem7 />
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function Header8() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-t8zmbz size-full">
        <div className="css-lprhnl css-paq0kv px-[16px] py-[24px] w-full">
          <FormElements2 />
        </div>
      </div>
    </div>
  );
}

function Filter3() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header7 />
      <Header8 />
    </div>
  );
}

function TypographyComp28() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Bedrooms</p>
      </div>
    </div>
  );
}

function Icons16() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6918)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header9() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[12px] w-full">
          <TypographyComp28 />
          <Icons16 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp29() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">0</p>
      </div>
    </div>
  );
}

function TypographyComp30() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">3+</p>
      </div>
    </div>
  );
}

function TypographyComp31() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">10+</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="css-paq0kv css-sf5ny4 w-full">
      <TypographyComp29 />
      <TypographyComp30 />
      <TypographyComp31 />
    </div>
  );
}

function Slider() {
  return (
    <div className="css-wc1msa h-[8px] w-full" data-name="slider">
      <div className="bg-white border-[#e5e8eb] bottom-1/4 css-zi270 left-0 right-0 top-0" data-name="area" />
      <div className="bg-[#57738e] bottom-1/4 css-8w4f3t left-0 right-1/2 top-0" data-name="progress" />
      <div className="css-roiesn left-[108px] size-[20px] top-[-7px]" data-name="indicator">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="indicator" r="9" stroke="var(--stroke-0, #57738E)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Header10() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-t8zmbz size-full">
        <div className="css-lprhnl css-paq0kv gap-[16px] px-[16px] py-[24px] w-full">
          <Frame12 />
          <Slider />
        </div>
      </div>
    </div>
  );
}

function Filter4() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header9 />
      <Header10 />
    </div>
  );
}

function TypographyComp32() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Bathrooms</p>
      </div>
    </div>
  );
}

function Icons17() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6918)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header11() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[12px] w-full">
          <TypographyComp32 />
          <Icons17 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp33() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">0</p>
      </div>
    </div>
  );
}

function TypographyComp34() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">3+</p>
      </div>
    </div>
  );
}

function TypographyComp35() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">10+</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="css-paq0kv css-sf5ny4 w-full">
      <TypographyComp33 />
      <TypographyComp34 />
      <TypographyComp35 />
    </div>
  );
}

function Slider1() {
  return (
    <div className="css-wc1msa h-[8px] w-full" data-name="slider">
      <div className="bg-white border-[#e5e8eb] bottom-1/4 css-zi270 left-0 right-0 top-0" data-name="area" />
      <div className="bg-[#57738e] bottom-1/4 css-8w4f3t left-0 right-1/2 top-0" data-name="progress" />
      <div className="css-roiesn left-[108px] size-[20px] top-[-7px]" data-name="indicator">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="indicator" r="9" stroke="var(--stroke-0, #57738E)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Header12() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-t8zmbz size-full">
        <div className="css-lprhnl css-paq0kv gap-[16px] px-[16px] py-[24px] w-full">
          <Frame14 />
          <Slider1 />
        </div>
      </div>
    </div>
  );
}

function Filter5() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header11 />
      <Header12 />
    </div>
  );
}

function Toggle() {
  return (
    <div className="css-wc1msa h-[24px] w-[44px]" data-name="toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="toggle">
          <rect fill="var(--fill-0, #E5E8EB)" height="23" rx="11.5" width="43" x="0.5" y="0.5" />
          <rect height="23" rx="11.5" stroke="var(--stroke-0, #57738E)" width="43" x="0.5" y="0.5" />
          <circle cx="32" cy="12" fill="var(--fill-0, #57738E)" id="Ellipse 2" r="9" />
        </g>
      </svg>
    </div>
  );
}

function TypographyComp36() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Pets</p>
      </div>
    </div>
  );
}

function Header13() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[16px] px-[16px] py-[12px] w-full">
          <Toggle />
          <TypographyComp36 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Filter6() {
  return (
    <div className="bg-[#f9f9f9] css-liobgr css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header13 />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="css-wc1msa h-[24px] w-[44px]" data-name="toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="toggle">
          <rect fill="var(--fill-0, #E5E8EB)" height="23" rx="11.5" width="43" x="0.5" y="0.5" />
          <rect height="23" rx="11.5" stroke="var(--stroke-0, #57738E)" width="43" x="0.5" y="0.5" />
          <circle cx="32" cy="12" fill="var(--fill-0, #57738E)" id="Ellipse 2" r="9" />
        </g>
      </svg>
    </div>
  );
}

function TypographyComp37() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Owns Voucher?</p>
      </div>
    </div>
  );
}

function Header14() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[16px] px-[16px] py-[12px] w-full">
          <Toggle1 />
          <TypographyComp37 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Filter7() {
  return (
    <div className="bg-[#f9f9f9] css-liobgr css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header14 />
    </div>
  );
}

function TypographyComp38() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Amenities</p>
      </div>
    </div>
  );
}

function Icons18() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6918" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(90 16 0)" width="16" x="16" />
          </mask>
          <g mask="url(#mask0_1_6918)">
            <path d={svgPaths.p834c670} fill="var(--fill-0, #57738E)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header15() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-7e0jf0 css-paq0kv px-[16px] py-[12px] w-full">
          <TypographyComp38 />
          <Icons18 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Icons19() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp39() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Swimming Pool</p>
      </div>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]" data-name="radio button">
      <Icons19 />
      <TypographyComp39 />
    </div>
  );
}

function Icons20() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6857" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6857)">
            <path d={svgPaths.p33aa9900} fill="var(--fill-0, #57738E)" id="check_box" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp40() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Laundry Available</p>
      </div>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]" data-name="radio button">
      <Icons20 />
      <TypographyComp40 />
    </div>
  );
}

function Icons21() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp41() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Parking</p>
      </div>
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]" data-name="radio button">
      <Icons21 />
      <TypographyComp41 />
    </div>
  );
}

function RadioGroup() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[8px]" data-name="radio group">
      <RadioButton />
      <RadioButton1 />
      <RadioButton2 />
    </div>
  );
}

function Header16() {
  return (
    <div className="css-5knerd w-full" data-name="Header">
      <div className="css-gxdil1 css-t8zmbz size-full">
        <div className="css-lprhnl css-paq0kv px-[16px] py-[24px] w-full">
          <RadioGroup />
        </div>
      </div>
    </div>
  );
}

function Filter8() {
  return (
    <div className="bg-[#f9f9f9] css-9uyk0n css-paq0kv w-full" data-name="Filter">
      <div aria-hidden="true" className="border-[#e5e8eb] css-c0vpe9 css-s3s1qq inset-0" />
      <Header15 />
      <Header16 />
    </div>
  );
}

function Spacer1() {
  return <div className="css-wc1msa h-[160px] w-full" data-name="Spacer" />;
}

function AllFilters() {
  return (
    <div className="css-2gbjjk css-rbru0j min-h-px min-w-px" data-name="All Filters">
      <Filter />
      <Filter1 />
      <Filter2 />
      <Filter3 />
      <Filter4 />
      <Filter5 />
      <Filter6 />
      <Filter7 />
      <Filter8 />
      <Spacer1 />
    </div>
  );
}

function FilterScrollable() {
  return (
    <div className="css-paq0kv css-tjmbjg w-full" data-name="Filter Scrollable">
      <AllFilters />
    </div>
  );
}

function RentersMatchFilter() {
  return (
    <div className="css-iyqo1d h-[778px] w-[256px]" data-name="Renter\'s Match Filter">
      <div className="css-1ndg7j css-x82mwy size-full">
        <FilterHeader />
        <FilterScrollable />
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons22() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_7060" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_7060)">
            <path d={svgPaths.p6964000} fill="var(--fill-0, #57738E)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon7() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px] h-[22px]" data-name="Text with Icon">
      <Icons22 />
      <div className="css-km87qg css-skt1ck css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-wwciga">Search</p>
      </div>
    </div>
  );
}

function Search1() {
  return (
    <div className="bg-white css-oron9n css-paq0kv min-w-[120px] px-[16px] py-[5px] w-[337px]" data-name="Search">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <TextWithIcon7 />
    </div>
  );
}

function Icons23() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.p3379a900} id="Vector" stroke="var(--stroke-0, #07192C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TypographyComp42() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Select Matches</p>
      </div>
    </div>
  );
}

function TextWithIcon8() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px] h-[22px]" data-name="Text with Icon">
      <Icons23 />
      <TypographyComp42 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9f9f9] css-paq0kv css-sgrpri h-[32px] px-[16px] py-[8px]" data-name="Button">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <TextWithIcon8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="css-22itc5 css-paq0kv h-[32px]">
      <Button />
    </div>
  );
}

function FilterSet() {
  return (
    <div className="css-paq0kv css-sf5ny4 w-full" data-name="Filter Set">
      <Search1 />
      <Frame13 />
    </div>
  );
}

function Icons24() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6850" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6850)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #07192C)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp43() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Listing</p>
      </div>
    </div>
  );
}

function Icons25() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6907" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6907)">
            <path d={svgPaths.p3b49f3f0} fill="var(--fill-0, #07192C)" id="swap_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]">
      <TypographyComp43 />
      <Icons25 />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[14.5px] w-full">
          <Icons24 />
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons26() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp44() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">18624 White Branch, Suite 598, 73952-9772, North Jaydon, Iowa, United States</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons26 />
          <TypographyComp44 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons27() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp45() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">51380 Aiyana Crossing, Suite 259, 61150, East Ransom, Alabama, United States</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons27 />
          <TypographyComp45 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons28() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp46() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">58670 Hintz Trace, Suite 266, 68737-5356, Volkmanchester, North Carolina, United States</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons28 />
          <TypographyComp46 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons29() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp47() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">0181 Verna Valleys, Suite 730, 58195-6507, West Julianne, South Dakota, United States</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons29 />
          <TypographyComp47 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons30() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp48() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">65517 Bessie Haven, Suite 982, 18387-3056, Annetteburgh, Missouri, United States</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons30 />
          <TypographyComp48 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons31() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp49() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">09133 Tess Center, Suite 833, 50671, Neomaborough, Alaska, United States</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons31 />
          <TypographyComp49 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons32() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp50() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">0690 Moen Shoal, Apt. 276, 71531-5411, West Maurice, Alaska, United States</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons32 />
          <TypographyComp50 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons33() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp51() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">7960 Maymie Crossroad, Apt. 899, 31400-6439, Emeryborough, Ohio, United States</p>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons33 />
          <TypographyComp51 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons34() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp52() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">2414 Wehner Extension, Suite 896, 86962-6187, Cloydtown, Indiana, United States</p>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons34 />
          <TypographyComp52 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons35() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp53() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">1317 Emard Forge, Suite 100, 00427, West Dejah, Pennsylvania, United States</p>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons35 />
          <TypographyComp53 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons36() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp54() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">4464 Lavern Mountains, Suite 517, 01560-2591, Mckaylastad, Nevada, United States</p>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons36 />
          <TypographyComp54 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Icons37() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6886)">
            <path d={svgPaths.p39ffcf80} fill="var(--fill-0, #57738E)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp55() {
  return (
    <div className="css-2gbjjk css-oaemai min-h-px min-w-px" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">30775 Jeramy Green, Apt. 021, 59249-7627, West Pascaleton, Delaware, United States</p>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv gap-[24px] px-[40px] py-[30.5px] w-full">
          <Icons37 />
          <TypographyComp55 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-r8b3nx css-s3s1qq inset-0" />
    </div>
  );
}

function Column() {
  return (
    <div className="css-9uyk0n css-xxbywr w-[355px]" data-name="Column">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
    </div>
  );
}

function TypographyComp56() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Rent</p>
      </div>
    </div>
  );
}

function Icons38() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6907" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6907)">
            <path d={svgPaths.p3b49f3f0} fill="var(--fill-0, #07192C)" id="swap_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]">
      <TypographyComp56 />
      <Icons38 />
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[14.5px] w-full">
          <Frame4 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp57() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$7,143</p>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp57 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp58() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$5,220</p>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp58 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp59() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$4,584</p>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp59 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp60() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$2,387</p>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp60 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp61() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$8,061</p>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp61 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp62() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$2,012</p>
      </div>
    </div>
  );
}

function Cell19() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp62 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp63() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$2,567</p>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp63 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp64() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$6,668</p>
      </div>
    </div>
  );
}

function Cell21() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp64 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp65() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$0,509</p>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp65 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp66() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$6,105</p>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp66 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp67() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$3,996</p>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp67 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp68() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$6,580</p>
      </div>
    </div>
  );
}

function Cell25() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp68 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Column1() {
  return (
    <div className="css-9uyk0n css-paq0kv w-[136.25px]" data-name="Column">
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
      <Cell20 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
      <Cell25 />
    </div>
  );
}

function TypographyComp69() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Agent</p>
      </div>
    </div>
  );
}

function Icons39() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6907" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6907)">
            <path d={svgPaths.p3b49f3f0} fill="var(--fill-0, #07192C)" id="swap_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]">
      <TypographyComp69 />
      <Icons39 />
    </div>
  );
}

function Cell26() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[14.5px] w-full">
          <Frame5 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp70() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Olenolin Bottrell</p>
      </div>
    </div>
  );
}

function Cell27() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp70 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp71() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Torr Fulkes</p>
      </div>
    </div>
  );
}

function Cell28() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp71 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp72() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Yehudit Cicchitello</p>
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp72 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp73() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Jerome Toon</p>
      </div>
    </div>
  );
}

function Cell30() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp73 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp74() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Wood Levett</p>
      </div>
    </div>
  );
}

function Cell31() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp74 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp75() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Brunhilda Dufton</p>
      </div>
    </div>
  );
}

function Cell32() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp75 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp76() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Maegan Bohin</p>
      </div>
    </div>
  );
}

function Cell33() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp76 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp77() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Mariska Rodda</p>
      </div>
    </div>
  );
}

function Cell34() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp77 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp78() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Tymon Hellyar</p>
      </div>
    </div>
  );
}

function Cell35() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp78 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp79() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Cissiee Lossman</p>
      </div>
    </div>
  );
}

function Cell36() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp79 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp80() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Sonny Human</p>
      </div>
    </div>
  );
}

function Cell37() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp80 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp81() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Hadleigh Daly</p>
      </div>
    </div>
  );
}

function Cell38() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-wcbkz4 size-full">
        <div className="css-ljnz24 css-paq0kv px-[40px] py-[30.5px] w-full">
          <TypographyComp81 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Column2() {
  return (
    <div className="css-9uyk0n css-paq0kv" data-name="Column">
      <Cell26 />
      <Cell27 />
      <Cell28 />
      <Cell29 />
      <Cell30 />
      <Cell31 />
      <Cell32 />
      <Cell33 />
      <Cell34 />
      <Cell35 />
      <Cell36 />
      <Cell37 />
      <Cell38 />
    </div>
  );
}

function TypographyComp82() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq"># Bedroom</p>
      </div>
    </div>
  );
}

function Icons40() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6907" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6907)">
            <path d={svgPaths.p3b49f3f0} fill="var(--fill-0, #07192C)" id="swap_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]">
      <TypographyComp82 />
      <Icons40 />
    </div>
  );
}

function Cell39() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[14.5px] w-full">
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp83() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">02</p>
      </div>
    </div>
  );
}

function Cell40() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp83 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp84() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">01</p>
      </div>
    </div>
  );
}

function Cell41() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp84 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp85() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">03</p>
      </div>
    </div>
  );
}

function Cell42() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp85 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp86() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">04</p>
      </div>
    </div>
  );
}

function Cell43() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp86 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp87() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">05</p>
      </div>
    </div>
  );
}

function Cell44() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp87 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp88() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">00</p>
      </div>
    </div>
  );
}

function Cell45() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp88 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Column3() {
  return (
    <div className="css-9uyk0n css-paq0kv w-[136.25px]" data-name="Column">
      <Cell39 />
      <Cell40 />
      <Cell41 />
      <Cell40 />
      <Cell42 />
      <Cell43 />
      <Cell41 />
      <Cell44 />
      <Cell45 />
      <Cell43 />
      <Cell44 />
      <Cell41 />
      <Cell41 />
    </div>
  );
}

function TypographyComp89() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq"># Bathroom</p>
      </div>
    </div>
  );
}

function Icons41() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_6907" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_6907)">
            <path d={svgPaths.p3b49f3f0} fill="var(--fill-0, #07192C)" id="swap_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px]">
      <TypographyComp89 />
      <Icons41 />
    </div>
  );
}

function Cell46() {
  return (
    <div className="bg-[#f9f9f9] css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[14.5px] w-full">
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp90() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">01</p>
      </div>
    </div>
  );
}

function Cell47() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp90 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp91() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">02</p>
      </div>
    </div>
  );
}

function Cell48() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp91 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function TypographyComp92() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">03</p>
      </div>
    </div>
  );
}

function Cell49() {
  return (
    <div className="bg-white css-5knerd w-full" data-name="Cell">
      <div className="css-gxdil1 css-mesbg2 size-full">
        <div className="css-paq0kv css-yxecpq px-[40px] py-[30.5px] w-full">
          <TypographyComp92 />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-sc7aem inset-0" />
    </div>
  );
}

function Column4() {
  return (
    <div className="css-9uyk0n css-paq0kv w-[136.25px]" data-name="Column">
      <Cell46 />
      <Cell47 />
      <Cell47 />
      <Cell48 />
      <Cell49 />
      <Cell49 />
      <Cell49 />
      <Cell48 />
      <Cell48 />
      <Cell49 />
      <Cell49 />
      <Cell47 />
      <Cell47 />
    </div>
  );
}

function ScrolCol() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Scrol Col">
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
    </div>
  );
}

function ScrolColGrp() {
  return (
    <div className="css-i0t8sa css-snkgse" data-name="Scrol Col Grp">
      <ScrolCol />
    </div>
  );
}

function Table() {
  return (
    <div className="css-837dwa css-vfeln6 left-0 top-0" data-name="Table">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <Column />
      <ScrolColGrp />
    </div>
  );
}

function TableScrollable() {
  return (
    <div className="css-kirot1 min-h-px min-w-px w-full" data-name="Table Scrollable">
      <div className="css-8kkpf5 css-h14kej size-full">
        <Table />
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="css-paq0kv css-rbru0j gap-[16px] min-h-px min-w-px w-full">
      <FilterSet />
      <TableScrollable />
    </div>
  );
}

function Frame9() {
  return (
    <div className="css-paq0kv css-rbru0j h-full min-h-px min-w-px">
      <Frame1 />
    </div>
  );
}

function AllContent() {
  return (
    <div className="css-paq0kv css-s0049r gap-[16px] min-h-px min-w-px w-full" data-name="All Content">
      <RentersMatchFilter />
      <Frame9 />
    </div>
  );
}

function ActualContent() {
  return (
    <div className="css-2gbjjk css-rbru0j gap-[32px] h-full min-h-px min-w-px" data-name="Actual Content">
      <Breadcrumb />
      <Frame8 />
      <AllContent />
    </div>
  );
}

function SubNav1() {
  return (
    <div className="bg-white css-hv01ud h-full min-h-px min-w-px" data-name="Sub Nav">
      <div aria-hidden="true" className="border-[#e5e8eb] css-5npf0s css-s3s1qq inset-0" />
      <div className="css-ftp8dc css-paq0kv p-[32px] size-full">
        <ActualContent />
      </div>
    </div>
  );
}

function SubNavComponents() {
  return (
    <div className="bg-white css-paq0kv css-qkkv34 min-h-px min-w-px w-full" data-name="Sub Nav Components">
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-trre33 inset-0" />
      <SubNav />
      <SubNav1 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[#3c8dff] css-fff8zq css-paq0kv h-[1024px] min-h-px min-w-px" data-name="Content Container">
      <div aria-hidden="true" className="border-[#e5e8eb] css-s3s1qq css-trre33 inset-0" />
      <PageHeader />
      <SubNavComponents />
    </div>
  );
}

export default function FindMatchesStartRenter() {
  return (
    <div className="bg-white css-paq0kv css-vf88k size-full" data-name="Find Matches - Start | Renter">
      <SideNav />
      <ContentContainer />
    </div>
  );
}