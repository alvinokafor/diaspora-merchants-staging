import { Box, Button, Grid, Flex, Heading, Text } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "react-router-dom";

export default function PaternshipAgreement() {
  const [_searchParams, setSearchParams] = useSearchParams();

  const handleSuccess = (e: any) => {
    e.preventDefault();
    setSearchParams({ step: "success" });
  };
  return (
    <Grid columns={"3"} gap={"3"} className="max-w-4xl mx-auto mt-6 mb-6">
      <Box className="border h-max border-slate-200 col-span-1 p-6 rounded-md">
        <Heading>Demo Store</Heading>

        <Flex direction={"column"} gap={"2"} mt={"4"}>
          <Flex align={"center"} gap={"2"}>
            <CheckIcon color="#16C4A4" width={18} height={18} />
            <Text>Fast Delivery to Customers</Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <CheckIcon color="#16C4A4" width={18} height={18} />
            <Text>30% Commision</Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <CheckIcon color="#16C4A4" width={18} height={18} />
            <Text>No Activation Fee</Text>
          </Flex>
        </Flex>
      </Box>
      <Box className="col-span-2">
        <Box className="space-y-3 mb-4">
          <Heading>Read and accept the following terms and conditions</Heading>
          <Text>
            You are one step closer to joining our merchant community!
          </Text>
        </Box>
        <div className="max-h-[400px] overflow-y-auto p-10 bg-slate-50 text-slate-700">
          1. CONFIDENTIAL INFORMATION: (a) Definition: Confidential Information
          shall include any information disclosed by the Disclosing Party,
          whether orally or in writing, that is designated as confidential or
          that should reasonably be understood to be confidential given the
          nature of the information and the circumstances of disclosure. (b)
          Exclusions: Confidential Information does not include information
          that: (i) Is or becomes publicly known through no fault of the
          Receiving Party; (ii) Was known to the Receiving Party prior to
          disclosure, as evidenced by written records; (iii) Is independently
          developed by the Receiving Party without use of or reference to the
          Confidential Information; (iv) Is rightfully received by the Receiving
          Party from a third party without a duty of confidentiality; or (v) Is
          required to be disclosed by law, regulation, or court order. In such a
          case, the Receiving Party shall notify the Disclosing Party promptly.
          2. PURPOSE: The Receiving Party agrees to use the Confidential
          Information solely for the purpose of; (i) Developing and delivering
          the front end design (UI/UX, wire framing e.t.c) of the disclosing
          parties software as agreed upon on the signed PRD or/and Contract
          document, (ii) And any other incidental matters relating to the
          project as may be specified or contained in the PRD or/and Contract.
          3. NON-DISCLOSURE: The Receiving Party shall not disclose, directly or
          indirectly, whether orally or by writing, or use the Confidential
          Information for any purpose other than the purposes stated in Section
          2 without the prior written consent of the Disclosing Party. It is the
          policy of PANDORA that matters related to the project, its operations,
          including its investors and partners, are not to be discussed in the
          presence of any unauthorized persons. It is understood that some of
          the project's details are sufficiently intriguing to tempt individuals
          to engage in conversations that may breach the rule of
          confidentiality. Therefore, it is of utmost importance that extreme
          caution is exercised in this regard. The information received in the
          context of the project is the private property of PANDORA, and in the
          event of unauthorized disclosure, there is the likelihood of creating
          legal liability and harm to the project's interests. Additionally,
          team members may have access to sensitive material that may be of a
          confidential nature, either related to the project, its personnel, or
          its partners. To prevent any breaches of that confidentiality, under
          no circumstances should the workspace or materials be shared with
          individuals who are not authorized stakeholders. In addition to
          matters concerning the project, some team members may routinely handle
          financial and personnel information as part of their regular duties.
          This information must be treated with the utmost sensitivity and
          confidentiality. Any breach of confidentiality, whether related to
          project matters or internal affairs, will be considered grounds for
          immediate action, which may include dismissal. 4. SAFEGUARDING
          CONFIDENTIALITY: The Receiving Party shall take reasonable measures to
          protect the confidentiality of the Confidential Information, including
          but not limited to measures to prevent unauthorized access, copying,
          or disclosure. 5. TERM: This Agreement shall be effective as of the
          date first above and shall continue in effect until fulfillment of the
          purpose or until terminated by either party upon written notice. 6.
          RETURN OF INFORMATION: Upon receiving a request by the Disclosing
          Party, or upon termination of this Agreement, the Receiving Party
          shall promptly return or destroy all Confidential Information and any
          copies, notes, or other materials whatsoever be it physical or virtual
          related to the Confidential Information. 7. INJUNCTIVE RELIEF: The
          Receiving Party acknowledges that unauthorized disclosure or use of
          the Confidential Information may cause irreparable harm to the
          Disclosing Party. Therefore, the Disclosing Party shall be entitled to
          damages and the Receiving party agrees to compensate the Disclosing
          party in this regard. 8. GOVERNING LAW: This Agreement shall be
          governed by and construed in accordance with the laws of the
          Federation of Nigeria. 9. ENTIRE AGREEMENT: This Agreement constitutes
          the entire agreement between the Parties and supersedes all prior and
          contemporaneous agreements, representations, and understandings,
          whether oral or written. IN WITNESS WHEREOF, the Parties hereto have
          executed this Agreement as of the date first above stated. Disclosing
          Party:
        </div>

        <Flex align={"center"} gap={"2"} mt={"3"}>
          <input type="checkbox" name="" id="" />
          {/* <Checkbox color="green" /> */}
          <Text>I agree to the terms of this patnership</Text>
        </Flex>

        <Button className="w-full mt-6" onClick={handleSuccess}>
          Submit
        </Button>
      </Box>
    </Grid>
  );
}
