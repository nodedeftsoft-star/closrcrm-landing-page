import svgPaths from "./svg-6hqwfai52g";
import imgImage1 from "figma:asset/ae6165592df26dc3d8972f30d12af591a80510c1.png";
import imgImage3 from "figma:asset/5b26243e86a2a01aa93842e0b0cfdcc4595668fd.png";
import imgImage from "figma:asset/f7a21dbaaf00a4051b7bf4df8cda48411d4d60ae.png";
import imgImage2 from "figma:asset/bbc687525de088fe9dd5de46b95a72d3b6f923d6.png";
import imgImage4 from "figma:asset/601d0fd130a4dc94e37bf27c1c5e73ecadd672f6.png";
import imgImage5 from "figma:asset/ce5266c06c9c01d489389651a31afb0a4daa1256.png";

function TypographyComp() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-kosxdm css-nkoeyr css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxkpi css-p704bq">54759 Turcotte Underpass</p>
      </div>
    </div>
  );
}

function TypographyComp1() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Suite 584, 19041, Diegofurt, Idaho, United States</p>
      </div>
    </div>
  );
}

function TypographyComp2() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Listing Details</p>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="bg-[#e8e8e8] css-paq0kv css-sgrpri h-[24px] p-[8px]" data-name="Badges">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <TypographyComp2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px]">
      <TypographyComp1 />
      <Badges />
    </div>
  );
}

function Frame20() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[8px]">
      <TypographyComp />
      <Frame21 />
    </div>
  );
}

function Icons() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_1939" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_1939)">
            <path d={svgPaths.p2bb059f0} fill="var(--fill-0, white)" id="graph_1" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TypographyComp3() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-white">
        <p className="css-8zr56v css-dlxleh css-p704bq">Match</p>
      </div>
    </div>
  );
}

function TextWithIcon() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px] h-[22px]" data-name="Text with Icon">
      <Icons />
      <TypographyComp3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3c8dff] css-paq0kv css-sgrpri h-[32px] px-[16px] py-[8px]" data-name="Button">
      <div aria-hidden="true" className="border-[#0a70ff] css-a4fzdx css-s3s1qq inset-0" />
      <TextWithIcon />
    </div>
  );
}

function Icons1() {
  return (
    <div className="css-wc1msa size-[24px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <mask height="24" id="mask0_1_1930" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_1930)">
            <path d={svgPaths.p13299980} fill="var(--fill-0, #07192C)" id="expand_content" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <a className="css-134pm3 css-wc1msa size-[24px]" data-name="Icons" href="https://www.zillow.com/homedetails/540-W-189th-St-APT-3B-New-York-NY-10040/2111525153_zpid/">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <path d="M7 7H17M17 7V17M17 7L7 17" id="Vector" stroke="var(--stroke-0, #07192C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </a>
  );
}

function Icons3() {
  return (
    <button className="css-134pm3 css-wc1msa size-[24px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons">
          <mask height="24" id="mask0_1_1926" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_1926)">
            <path d={svgPaths.p12080d00} fill="var(--fill-0, #07192C)" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function Frame10() {
  return (
    <div className="css-owl66 css-paq0kv gap-[16px]">
      <Button />
      <Icons1 />
      <Icons2 />
      <Icons3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="css-paq0kv css-sf5ny4 w-[1200px]">
      <Frame20 />
      <Frame10 />
    </div>
  );
}

function TypographyComp4() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Update Status</p>
      </div>
    </div>
  );
}

function Icons4() {
  return (
    <div className="css-wc1msa size-[16px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <mask height="16" id="mask0_1_1922" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" transform="rotate(-90 0 16)" width="16" y="16" />
          </mask>
          <g mask="url(#mask0_1_1922)">
            <path d={svgPaths.pe640700} fill="var(--fill-0, #07192C)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextWithIcon1() {
  return (
    <div className="css-paq0kv css-snkgse gap-[8px] h-[22px]" data-name="Text with Icon">
      <TypographyComp4 />
      <Icons4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9f9f9] css-paq0kv css-sgrpri h-[32px] px-[16px] py-[8px]" data-name="Button">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <TextWithIcon1 />
    </div>
  );
}

function TypographyComp5() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">To Show</p>
      </div>
    </div>
  );
}

function StatusProgressChip() {
  return (
    <div className="css-l79cxw css-sz2f8 gap-[8px] h-[32px] mr-[-32px] w-[270px]" data-name="Status Progress Chip">
      <div className="css-roiesn h-[32px] left-0 top-0 w-[270px]">
        <div className="css-trglf0 inset-[0_1.25%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266.615 32">
            <path d={svgPaths.p30ecc000} fill="var(--fill-0, white)" id="Rectangle 128" stroke="var(--stroke-0, #E5E8EB)" />
          </svg>
        </div>
      </div>
      <TypographyComp5 />
    </div>
  );
}

function TypographyComp6() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">To Show</p>
      </div>
    </div>
  );
}

function StatusProgressChip1() {
  return (
    <div className="css-sz2f8 css-xxbywr gap-[8px] h-[32px] mr-[-32px] w-[270px]" data-name="Status Progress Chip">
      <div className="css-roiesn h-[32px] left-0 top-0 w-[270px]">
        <div className="css-trglf0 inset-[0_1.25%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266.615 32">
            <path d={svgPaths.p30ecc000} fill="var(--fill-0, white)" id="Rectangle 128" stroke="var(--stroke-0, #E5E8EB)" />
          </svg>
        </div>
      </div>
      <TypographyComp6 />
    </div>
  );
}

function TypographyComp7() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#3c8dff]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Dead</p>
      </div>
    </div>
  );
}

function StatusProgressChip2() {
  return (
    <div className="css-i0t8sa css-sz2f8 gap-[8px] h-[32px] mr-[-32px] w-[270px]" data-name="Status Progress Chip">
      <div className="css-roiesn h-[32px] left-0 top-0 w-[270px]">
        <div className="css-trglf0 inset-[0_1.25%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266.615 32">
            <path d={svgPaths.p30ecc000} fill="var(--fill-0, #F0F6FF)" id="Rectangle 128" stroke="var(--stroke-0, #E5E8EB)" />
          </svg>
        </div>
      </div>
      <TypographyComp7 />
    </div>
  );
}

function Status() {
  return (
    <div className="css-krtr3t css-nphze8 max-w-[971px] min-h-px min-w-px pl-0 pr-[32px] py-0" data-name="Status">
      <StatusProgressChip />
      <StatusProgressChip1 />
      <StatusProgressChip2 />
    </div>
  );
}

function StatusProgress() {
  return (
    <div className="css-22itc5 css-paq0kv gap-[16px] h-[32px] w-full" data-name="Status Progress">
      <Button1 />
      <Status />
    </div>
  );
}

function ImgMain() {
  return (
    <div className="css-kirot1 h-full min-h-px min-w-px" data-name="Img Main">
      <div className="css-8kkpf5 css-gxdil1 size-full">
        <div className="css-2chd6x css-roiesn h-[807px] left-[calc(50%+0.5px)] top-[calc(50%-14px)] w-[1076px]" data-name="image 1">
          <img alt="" className="css-5eam1e css-75y27k css-trglf0 inset-0 max-w-none size-full" src={imgImage1} />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function ImgThumb() {
  return (
    <div className="css-iyqo1d size-[160px]" data-name="Img Thumb 1">
      <div className="css-8kkpf5 css-gxdil1 size-full">
        <div className="css-2chd6x css-roiesn h-[161px] left-1/2 top-[calc(50%+0.5px)] w-[214.667px]" data-name="image 3">
          <img alt="" className="css-5eam1e css-9unj7x css-trglf0 inset-0 max-w-none size-full" src={imgImage3} />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function ImgThumb1() {
  return (
    <div className="css-iyqo1d size-[160px]" data-name="Img Thumb 2">
      <div className="css-8kkpf5 css-gxdil1 size-full">
        <div className="css-2chd6x css-roiesn h-[160px] left-1/2 top-1/2 w-[213.333px]" data-name="image">
          <img alt="" className="css-5eam1e css-9unj7x css-trglf0 inset-0 max-w-none size-full" src={imgImage} />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function ImgThumb2() {
  return (
    <div className="css-iyqo1d size-[160px]" data-name="Img Thumb 3">
      <div className="css-8kkpf5 css-gxdil1 size-full">
        <div className="css-2chd6x css-roiesn h-[160px] left-1/2 top-1/2 w-[213.333px]" data-name="image">
          <img alt="" className="css-5eam1e css-9unj7x css-trglf0 inset-0 max-w-none size-full" src={imgImage2} />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function ImgThumb3() {
  return (
    <div className="css-iyqo1d size-[160px]" data-name="Img Thumb 4">
      <div className="css-8kkpf5 css-gxdil1 size-full">
        <div className="css-2chd6x css-roiesn h-[160px] left-1/2 top-1/2 w-[213.333px]" data-name="image">
          <img alt="" className="css-5eam1e css-9unj7x css-trglf0 inset-0 max-w-none size-full" src={imgImage4} />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function ImgThumb4() {
  return (
    <div className="css-iyqo1d size-[160px]" data-name="Img Thumb 5">
      <div className="css-8kkpf5 css-gxdil1 size-full">
        <div className="css-2chd6x css-roiesn h-[160px] left-1/2 top-1/2 w-[213.333px]" data-name="image">
          <img alt="" className="css-5eam1e css-9unj7x css-trglf0 inset-0 max-w-none size-full" src={imgImage5} />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function TypographyComp8() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-96jdkd css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxleh css-p704bq">See all 8 photos</p>
      </div>
    </div>
  );
}

function ImgThumb5() {
  return (
    <div className="bg-[#f9f9f9] css-iyqo1d size-[160px]" data-name="Img Thumb 6">
      <div className="css-2gbjjk css-qf0xdz px-[10px] py-[23px] size-full">
        <TypographyComp8 />
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
    </div>
  );
}

function ThumbFrame() {
  return (
    <div className="css-gcrbkm css-xb1oxg gap-[8px] w-[479px]" data-name="Thumb Frame">
      <ImgThumb />
      <ImgThumb1 />
      <ImgThumb2 />
      <ImgThumb3 />
      <ImgThumb4 />
      <ImgThumb5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="css-9uyk0n css-paq0kv h-full">
      <ThumbFrame />
    </div>
  );
}

function AllImageFrame() {
  return (
    <div className="css-22itc5 css-paq0kv gap-[8px] h-[581px] w-full" data-name="All Image Frame">
      <ImgMain />
      <Frame19 />
    </div>
  );
}

function TypographyComp9() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-kosxdm css-rlu1og css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Details</p>
      </div>
    </div>
  );
}

function TypographyComp10() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Location</p>
      </div>
    </div>
  );
}

function TypographyComp11() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Property Type</p>
      </div>
    </div>
  );
}

function TypographyComp12() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Rent</p>
      </div>
    </div>
  );
}

function TypographyComp13() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Pet</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[16px]">
      <TypographyComp10 />
      <TypographyComp11 />
      <TypographyComp12 />
      <TypographyComp13 />
    </div>
  );
}

function TypographyComp14() {
  return (
    <div className="css-2gbjjk css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Hell’s Kitchen</p>
      </div>
    </div>
  );
}

function TypographyComp15() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">House</p>
      </div>
    </div>
  );
}

function TypographyComp16() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">$4,300</p>
      </div>
    </div>
  );
}

function TypographyComp17() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Yes</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="css-2gbjjk css-rbru0j gap-[16px] min-h-px min-w-px">
      <TypographyComp14 />
      <TypographyComp15 />
      <TypographyComp16 />
      <TypographyComp17 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="css-22itc5 css-paq0kv gap-[48px] w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[24px] w-full">
      <TypographyComp9 />
      <Frame3 />
    </div>
  );
}

function KeyInfoCard() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Key Info Card">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-paq0kv css-x82mwy p-[24px] w-full">
        <Frame />
      </div>
    </div>
  );
}

function TypographyComp18() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-kosxdm css-rlu1og css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Agent</p>
      </div>
    </div>
  );
}

function TypographyComp19() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Name</p>
      </div>
    </div>
  );
}

function TypographyComp20() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Contact</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[16px]">
      <TypographyComp19 />
      <TypographyComp20 />
    </div>
  );
}

function TypographyComp21() {
  return (
    <div className="css-2gbjjk css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Robert Wilson</p>
      </div>
    </div>
  );
}

function TypographyComp22() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">+1 (435) 438 7465</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="css-2gbjjk css-rbru0j gap-[16px] min-h-px min-w-px">
      <TypographyComp21 />
      <TypographyComp22 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="css-22itc5 css-paq0kv gap-[48px] w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[24px] w-full">
      <TypographyComp18 />
      <Frame9 />
    </div>
  );
}

function FinancialsCard() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Financials Card">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-paq0kv css-x82mwy p-[24px] w-full">
        <Frame11 />
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="css-paq0kv css-rbru0j gap-[16px] min-h-px min-w-px" data-name="Column 01">
      <KeyInfoCard />
      <FinancialsCard />
    </div>
  );
}

function TypographyComp23() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-kosxdm css-rlu1og css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Brokerage</p>
      </div>
    </div>
  );
}

function TypographyComp24() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Name</p>
      </div>
    </div>
  );
}

function TypographyComp25() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">Contact</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[16px]">
      <TypographyComp24 />
      <TypographyComp25 />
    </div>
  );
}

function TypographyComp26() {
  return (
    <div className="css-2gbjjk css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">James Watson</p>
      </div>
    </div>
  );
}

function TypographyComp27() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">+1 (543) 435 2387</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="css-2gbjjk css-rbru0j gap-[16px] min-h-px min-w-px">
      <TypographyComp26 />
      <TypographyComp27 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="css-22itc5 css-paq0kv gap-[48px] w-full">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[24px] w-full">
      <TypographyComp23 />
      <Frame14 />
    </div>
  );
}

function FinancialsCard1() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Financials Card">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-paq0kv css-x82mwy p-[24px] w-full">
        <Frame15 />
      </div>
    </div>
  );
}

function TypographyComp28() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-kosxdm css-rlu1og css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Description</p>
      </div>
    </div>
  );
}

function TypographyComp29() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-e3wplg css-kosxdm min-h-px min-w-px text-[#07192c]">
        <p className="css-61lm1n css-8zr56v css-p704bq">This charming unit features a sun-drenched open-plan living and dining area with oversized windows.</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="css-2gbjjk css-rbru0j min-h-px min-w-px">
      <TypographyComp29 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="css-22itc5 css-paq0kv w-full">
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[24px] w-full">
      <TypographyComp28 />
      <Frame17 />
    </div>
  );
}

function FinancialsCard2() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Financials Card">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-paq0kv css-x82mwy p-[24px] w-full">
        <Frame18 />
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="css-paq0kv css-rbru0j gap-[16px] min-h-px min-w-px" data-name="Column 2">
      <FinancialsCard1 />
      <FinancialsCard2 />
    </div>
  );
}

function TypographyComp30() {
  return (
    <div className="css-paq0kv css-snkgse" data-name="Typography Comp">
      <div className="css-kosxdm css-rlu1og css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Activity</p>
      </div>
    </div>
  );
}

function LineEllipse() {
  return (
    <div className="css-g7h9eo css-paq0kv h-full w-[9px]" data-name="Line & Ellipse">
      <div className="bg-[#57738e] css-wc1msa h-full w-px" />
      <div className="css-lem4j5 css-roiesn left-0 size-[9px] top-[calc(50%+0.5px)]" data-name="activity Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #57738E)" id="activity Ellipse" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function TypographyComp31() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Alex Rivera created a new proposal</p>
      </div>
    </div>
  );
}

function TypographyComp32() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">May 11, 2025 10:35 PM</p>
      </div>
    </div>
  );
}

function Activity01Text() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[4px] px-0 py-[16px] w-[303px]" data-name="Activity 01 Text">
      <TypographyComp31 />
      <TypographyComp32 />
    </div>
  );
}

function Activity() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px] w-full" data-name="Activity 1">
      <div className="css-sevin5">
        <LineEllipse />
      </div>
      <Activity01Text />
    </div>
  );
}

function LineEllipse1() {
  return (
    <div className="css-g7h9eo css-paq0kv h-full w-[9px]" data-name="Line & Ellipse">
      <div className="bg-[#57738e] css-wc1msa h-full w-px" />
      <div className="css-lem4j5 css-roiesn left-0 size-[9px] top-[calc(50%+0.5px)]" data-name="activity Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #57738E)" id="activity Ellipse" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function TypographyComp33() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Alex Rivera created a new proposal</p>
      </div>
    </div>
  );
}

function TypographyComp34() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">May 11, 2025 10:35 PM</p>
      </div>
    </div>
  );
}

function Activity01Text1() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[4px] px-0 py-[16px] w-[303px]" data-name="Activity 01 Text">
      <TypographyComp33 />
      <TypographyComp34 />
    </div>
  );
}

function Activity1() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px] w-full" data-name="Activity 2">
      <div className="css-sevin5">
        <LineEllipse1 />
      </div>
      <Activity01Text1 />
    </div>
  );
}

function LineEllipse2() {
  return (
    <div className="css-g7h9eo css-paq0kv h-full w-[9px]" data-name="Line & Ellipse">
      <div className="bg-[#57738e] css-wc1msa h-full w-px" />
      <div className="css-lem4j5 css-roiesn left-0 size-[9px] top-[calc(50%+0.5px)]" data-name="activity Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #57738E)" id="activity Ellipse" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function TypographyComp35() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Alex Rivera created a new proposal</p>
      </div>
    </div>
  );
}

function TypographyComp36() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">May 11, 2025 10:35 PM</p>
      </div>
    </div>
  );
}

function Activity01Text2() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[4px] px-0 py-[16px] w-[303px]" data-name="Activity 01 Text">
      <TypographyComp35 />
      <TypographyComp36 />
    </div>
  );
}

function Activity2() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px] w-full" data-name="Activity 3">
      <div className="css-sevin5">
        <LineEllipse2 />
      </div>
      <Activity01Text2 />
    </div>
  );
}

function LineEllipse3() {
  return (
    <div className="css-g7h9eo css-paq0kv h-full w-[9px]" data-name="Line & Ellipse">
      <div className="bg-[#57738e] css-wc1msa h-full w-px" />
      <div className="css-lem4j5 css-roiesn left-0 size-[9px] top-[calc(50%+0.5px)]" data-name="activity Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #57738E)" id="activity Ellipse" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function TypographyComp37() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Alex Rivera created a new proposal</p>
      </div>
    </div>
  );
}

function TypographyComp38() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">May 11, 2025 10:35 PM</p>
      </div>
    </div>
  );
}

function Activity01Text3() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[4px] px-0 py-[16px] w-[303px]" data-name="Activity 01 Text">
      <TypographyComp37 />
      <TypographyComp38 />
    </div>
  );
}

function Activity3() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px] w-full" data-name="Activity 4">
      <div className="css-sevin5">
        <LineEllipse3 />
      </div>
      <Activity01Text3 />
    </div>
  );
}

function LineEllipse4() {
  return (
    <div className="css-g7h9eo css-paq0kv h-full w-[9px]" data-name="Line & Ellipse">
      <div className="bg-[#57738e] css-wc1msa h-full w-px" />
      <div className="css-lem4j5 css-roiesn left-0 size-[9px] top-[calc(50%+0.5px)]" data-name="activity Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #57738E)" id="activity Ellipse" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function TypographyComp39() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Alex Rivera created a new proposal</p>
      </div>
    </div>
  );
}

function TypographyComp40() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">May 11, 2025 10:35 PM</p>
      </div>
    </div>
  );
}

function Activity01Text4() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[4px] px-0 py-[16px] w-[303px]" data-name="Activity 01 Text">
      <TypographyComp39 />
      <TypographyComp40 />
    </div>
  );
}

function Activity4() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px] w-full" data-name="Activity 5">
      <div className="css-sevin5">
        <LineEllipse4 />
      </div>
      <Activity01Text4 />
    </div>
  );
}

function LineEllipse5() {
  return (
    <div className="css-g7h9eo css-paq0kv h-full w-[9px]" data-name="Line & Ellipse">
      <div className="bg-[#57738e] css-wc1msa h-full w-px" />
      <div className="css-lem4j5 css-roiesn left-0 size-[9px] top-[calc(50%+0.5px)]" data-name="activity Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #57738E)" id="activity Ellipse" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function TypographyComp41() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Alex Rivera created a new proposal</p>
      </div>
    </div>
  );
}

function TypographyComp42() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">May 11, 2025 10:35 PM</p>
      </div>
    </div>
  );
}

function Activity01Text5() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[4px] px-0 py-[16px] w-[303px]" data-name="Activity 01 Text">
      <TypographyComp41 />
      <TypographyComp42 />
    </div>
  );
}

function Activity5() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px] w-full" data-name="Activity 6">
      <div className="css-sevin5">
        <LineEllipse5 />
      </div>
      <Activity01Text5 />
    </div>
  );
}

function LineEllipse6() {
  return (
    <div className="css-g7h9eo css-paq0kv h-full w-[9px]" data-name="Line & Ellipse">
      <div className="bg-[#57738e] css-wc1msa h-full w-px" />
      <div className="css-lem4j5 css-roiesn left-0 size-[9px] top-[calc(50%+0.5px)]" data-name="activity Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #57738E)" id="activity Ellipse" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function TypographyComp43() {
  return (
    <div className="css-2gbjjk css-snkgse w-full" data-name="Typography Comp">
      <div className="css-7j860c css-kosxdm css-vkpzlc text-[#07192c]">
        <p className="css-8zr56v css-dlxleh css-p704bq">Alex Rivera created a new proposal</p>
      </div>
    </div>
  );
}

function TypographyComp44() {
  return (
    <div className="css-paq0kv css-snkgse w-full" data-name="Typography Comp">
      <div className="css-88q2xe css-kosxdm css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-dlxlg7 css-p704bq">May 11, 2025 10:35 PM</p>
      </div>
    </div>
  );
}

function Activity01Text6() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[4px] px-0 py-[16px] w-[303px]" data-name="Activity 01 Text">
      <TypographyComp43 />
      <TypographyComp44 />
    </div>
  );
}

function Activity6() {
  return (
    <div className="css-paq0kv css-snkgse gap-[16px] w-full" data-name="Activity 7">
      <div className="css-sevin5">
        <LineEllipse6 />
      </div>
      <Activity01Text6 />
    </div>
  );
}

function AllActivities() {
  return (
    <div className="bg-white css-2gbjjk css-wfwx8q left-0 top-0 w-[336px]" data-name="All Activities">
      <Activity />
      <Activity1 />
      <Activity2 />
      <Activity3 />
      <Activity4 />
      <Activity5 />
      <Activity6 />
    </div>
  );
}

function ActScroll() {
  return (
    <div className="css-hqblx2 css-wc1msa h-[224px] w-full" data-name="Act Scroll">
      <AllActivities />
    </div>
  );
}

function Frame4() {
  return (
    <div className="css-paq0kv css-snkgse w-full">
      <div className="css-km87qg css-skt1ck css-vkpzlc text-[#57738e]">
        <p className="css-8zr56v css-wwciga">Add a new activity here</p>
      </div>
    </div>
  );
}

function ArrowCircleUp() {
  return (
    <div className="css-wc1msa size-[32px]" data-name="arrow_circle_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="arrow_circle_up">
          <mask height="32" id="mask0_1_1914" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_1_1914)">
            <path d={svgPaths.p1d223180} fill="var(--fill-0, #57738E)" id="arrow_circle_up_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="css-owl66 css-paq0kv w-full">
      <ArrowCircleUp />
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white css-iyqo1d min-w-[120px] w-full" data-name="Search">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0" />
      <div className="css-paq0kv css-x82mwy gap-[8px] min-w-[inherit] px-[24px] py-[16px] w-full">
        <Frame4 />
        <Frame5 />
      </div>
    </div>
  );
}

function ActivityContent() {
  return (
    <div className="css-9uyk0n css-paq0kv gap-[24px] w-full" data-name="Activity Content">
      <TypographyComp30 />
      <ActScroll />
      <Search />
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="bg-white css-iyqo1d w-full" data-name="Activity Card">
      <div aria-hidden="true" className="border-[#e5e8eb] css-a4fzdx css-s3s1qq inset-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-paq0kv css-x82mwy p-[24px] w-full">
        <ActivityContent />
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="css-paq0kv css-rbru0j min-h-px min-w-px" data-name="Column 3">
      <ActivityCard />
    </div>
  );
}

function InfoGrid() {
  return (
    <div className="css-3vj1k css-xb1oxg gap-[16px] w-full" data-name="Info Grid">
      <Column2 />
      <Column />
      <Column1 />
    </div>
  );
}

function ViewBuyerPopup() {
  return (
    <div className="bg-white css-5knerd min-h-[1024px] w-full" data-name="View Buyer Popup">
      <div className="css-gxdil1 css-t8zmbz min-h-[inherit] size-full">
        <div className="css-lprhnl css-paq0kv gap-[32px] min-h-[inherit] pb-[200px] pt-[18px] px-[32px] w-full">
          <Frame6 />
          <StatusProgress />
          <AllImageFrame />
          <InfoGrid />
        </div>
      </div>
      <div aria-hidden="true" className="border-[#e5e8eb] css-5npf0s css-s3s1qq inset-0" />
    </div>
  );
}

export default function ViewEachListingOverlayRenter() {
  return (
    <div className="css-i9h3z css-paq0kv size-full" data-name="View Each Listing Overlay - Renter">
      <ViewBuyerPopup />
    </div>
  );
}