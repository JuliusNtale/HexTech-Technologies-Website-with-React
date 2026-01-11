import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - NeuralTale Technologies',
  description: 'Terms and conditions for using NeuralTale Technologies services, purchasing IT equipment, and custom software development in Tanzania.',
  openGraph: {
    title: 'Terms of Service | NeuralTale Technologies',
    description: 'Review our terms and conditions for IT equipment supply, software development, and technology solutions in Tanzania.',
    url: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#03213F] via-[#0A3A5C] to-[#03213F] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">
            Last Updated: January 11, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to NeuralTale Technologies ("NeuralTale," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website (neuraltale.com), services, products, and any related services we provide (collectively, the "Services").
              </p>
              <p className="text-gray-700 mb-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <p className="text-blue-900 font-semibold">Company Information:</p>
                <p className="text-blue-800 text-sm mt-2">
                  NeuralTale Technologies<br />
                  Msimbazi Street, Dar es Salaam, Tanzania<br />
                  Email: helpdesk@neuraltale.com<br />
                  Phone: +255 653 520 829
                </p>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By creating an account, placing an order, or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms apply to all visitors, users, customers, and others who access or use our Services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Services Description</h2>
              <p className="text-gray-700 mb-4">
                NeuralTale Technologies provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>IT Equipment Supply:</strong> Sale and supply of laptops, desktop computers, servers, networking equipment, peripherals, and accessories from brands including Dell, HP, Lenovo, Apple, TP-Link, and Ubiquiti.</li>
                <li><strong>Custom Software Development:</strong> Design, development, and deployment of custom software solutions, web applications, and mobile applications.</li>
                <li><strong>Network Solutions:</strong> Design, installation, configuration, and maintenance of enterprise networking infrastructure including TP-Link Omada and UniFi systems.</li>
                <li><strong>M-Pesa Integration Services:</strong> Implementation of M-Pesa payment gateways, captive portal voucher systems, and mobile money solutions.</li>
                <li><strong>AI Integration:</strong> Implementation of artificial intelligence solutions for business automation and optimization.</li>
                <li><strong>IT Consulting:</strong> Professional consultation services for technology planning, digital transformation, and IT infrastructure.</li>
                <li><strong>Technical Support:</strong> Maintenance, troubleshooting, and ongoing support for hardware and software systems.</li>
              </ul>
            </div>

            {/* Eligibility */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Eligibility</h2>
              <p className="text-gray-700 mb-4">
                You must be at least 18 years old and have the legal capacity to enter into contracts under Tanzanian law to use our Services. By using our Services, you represent and warrant that you meet these requirements.
              </p>
              <p className="text-gray-700 mb-4">
                For business customers, you represent that you have the authority to bind your organization to these Terms.
              </p>
            </div>

            {/* Account Registration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Account Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our Services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or are inactive for extended periods.
              </p>
            </div>

            {/* Product Orders and Purchases */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Product Orders and Purchases</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.1 Order Placement</h3>
              <p className="text-gray-700 mb-4">
                When you place an order for products through our Services, you make an offer to purchase the products at the prices and terms specified. We reserve the right to accept or reject any order at our discretion.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.2 Pricing</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All prices are quoted in Tanzanian Shillings (TZS) or US Dollars (USD) as indicated</li>
                <li>Prices are subject to change without notice</li>
                <li>Prices include applicable VAT unless otherwise stated</li>
                <li>Import duties and customs charges may apply to certain products</li>
                <li>We reserve the right to correct pricing errors and cancel orders placed at incorrect prices</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.3 Payment Terms</h3>
              <p className="text-gray-700 mb-4">
                Payment is required before product delivery or service commencement unless alternative arrangements are made in writing. We accept:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>M-Pesa mobile money payments</li>
                <li>Bank transfers</li>
                <li>Cash payments at our office</li>
                <li>Corporate purchase orders (for approved business customers)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.4 Product Availability</h3>
              <p className="text-gray-700 mb-4">
                Product availability is subject to stock levels and supplier availability. We will notify you if ordered products are unavailable and offer alternatives or refunds.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.5 Delivery</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Delivery charges may apply based on location and order value</li>
                <li>Risk of loss passes to you upon delivery</li>
                <li>You must inspect products upon delivery and report any damage within 48 hours</li>
              </ul>
            </div>

            {/* Software Development Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Software Development Services</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">7.1 Project Scope</h3>
              <p className="text-gray-700 mb-4">
                Custom software development projects are governed by individual project agreements that specify:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and schedule</li>
                <li>Acceptance criteria</li>
                <li>Support and maintenance terms</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">7.2 Client Responsibilities</h3>
              <p className="text-gray-700 mb-4">
                For software development projects, clients agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide timely feedback and approvals</li>
                <li>Supply necessary information, content, and access</li>
                <li>Designate authorized representatives for decision-making</li>
                <li>Test deliverables and provide feedback within agreed timeframes</li>
                <li>Make timely milestone payments as agreed</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">7.3 Change Requests</h3>
              <p className="text-gray-700 mb-4">
                Changes to project scope may require additional fees and timeline adjustments. All change requests must be documented and approved in writing.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Intellectual Property Rights</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">8.1 NeuralTale Property</h3>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, software code, and data compilations, are owned by NeuralTale Technologies and protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">8.2 Custom Development IP Rights</h3>
              <p className="text-gray-700 mb-4">
                For custom software development projects:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Client retains ownership of pre-existing materials and content provided to NeuralTale</li>
                <li>NeuralTale retains ownership of pre-existing tools, frameworks, and code libraries</li>
                <li>Ownership of custom-developed deliverables transfers to the client upon full payment, unless otherwise agreed</li>
                <li>NeuralTale retains the right to use general knowledge, skills, and techniques in future projects</li>
                <li>NeuralTale may showcase completed projects in portfolios with client permission</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">8.3 License to Use Services</h3>
              <p className="text-gray-700 mb-4">
                We grant you a limited, non-exclusive, non-transferable license to access and use our Services for their intended purpose, subject to these Terms.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Warranties and Disclaimers</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">9.1 Product Warranties</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hardware products carry manufacturer warranties as specified</li>
                <li>We pass through manufacturer warranty terms to customers</li>
                <li>Warranty claims must be made within the warranty period with proof of purchase</li>
                <li>Warranties may be void if products are misused, damaged, or modified</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">9.2 Service Warranties</h3>
              <p className="text-gray-700 mb-4">
                We warrant that our services will be performed with reasonable skill and care in accordance with industry standards. Software development includes a defect correction period as specified in project agreements.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">9.3 Disclaimer</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <p className="text-yellow-900 font-semibold uppercase">Important:</p>
                <p className="text-yellow-800 text-sm mt-2">
                  EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our Services will meet your specific requirements</li>
                <li>Our Services will be uninterrupted, timely, secure, or error-free</li>
                <li>Results obtained from our Services will be accurate or reliable</li>
                <li>Any errors in software will be corrected (except during warranty periods)</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <div className="bg-red-50 border-l-4 border-red-600 p-4 my-6">
                <p className="text-red-900 font-semibold uppercase">Liability Limitations:</p>
                <p className="text-red-800 text-sm mt-2">
                  TO THE MAXIMUM EXTENT PERMITTED BY TANZANIAN LAW, NEURALTALE TECHNOLOGIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Our total liability for any claims arising from or related to these Terms or our Services shall not exceed:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>For product sales: The amount you paid for the specific product</li>
                <li>For services: The amount you paid for the specific service in the 12 months preceding the claim</li>
                <li>In no case shall our total liability exceed TZS 50,000,000 (Fifty Million Tanzanian Shillings)</li>
              </ul>
            </div>

            {/* Refunds and Returns */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Refunds and Returns</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">11.1 Hardware Products</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Unopened products may be returned within 7 days of delivery for a full refund</li>
                <li>Opened products may only be returned if defective, within 14 days of delivery</li>
                <li>Custom-ordered or special-order products are non-refundable</li>
                <li>Return shipping costs are the responsibility of the customer unless the product is defective</li>
                <li>Refunds will be processed within 14 business days of receiving returned products</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">11.2 Services</h3>
              <p className="text-gray-700 mb-4">
                Service fees are generally non-refundable once work has commenced. Refund eligibility for services will be determined based on project-specific agreements and work completed.
              </p>
            </div>

            {/* User Conduct */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">12. User Conduct</h2>
              <p className="text-gray-700 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use our Services for any unlawful purpose or in violation of any regulations</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Upload viruses, malware, or any malicious code</li>
                <li>Harvest or collect information about other users</li>
                <li>Use automated systems to access the Services without permission</li>
                <li>Reverse engineer, decompile, or disassemble any software provided</li>
              </ul>
            </div>

            {/* Data Protection and Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Data Protection and Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your use of our Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a> to understand our data collection and protection practices.
              </p>
              <p className="text-gray-700 mb-4">
                We comply with Tanzania Data Protection Act and implement appropriate technical and organizational measures to protect your personal data.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Third-Party Services and Links</h2>
              <p className="text-gray-700 mb-4">
                Our Services may contain links to third-party websites, services, or products. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The content, accuracy, or functionality of third-party services</li>
                <li>Third-party privacy practices or terms of service</li>
                <li>Any damages arising from your use of third-party services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We may use third-party payment processors (e.g., M-Pesa) for transactions. Your use of such services is subject to their respective terms and conditions.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">15. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of business, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Business strategies and plans</li>
                <li>Technical specifications and source code</li>
                <li>Customer lists and pricing information</li>
                <li>Trade secrets and proprietary processes</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This confidentiality obligation survives termination of these Terms for a period of 5 years.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">16. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify, defend, and hold harmless NeuralTale Technologies, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your violation of these Terms</li>
                <li>Your use or misuse of our Services</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content or information you provide</li>
                <li>Your violation of applicable laws or regulations</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">17. Termination</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">17.1 By You</h3>
              <p className="text-gray-700 mb-4">
                You may terminate your account at any time by contacting us. Termination does not affect outstanding payment obligations or ongoing service agreements.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">17.2 By NeuralTale</h3>
              <p className="text-gray-700 mb-4">
                We may suspend or terminate your access to our Services immediately, without notice, for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Abuse of our Services or staff</li>
                <li>Non-payment of fees</li>
                <li>Request by law enforcement or government agencies</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">17.3 Effect of Termination</h3>
              <p className="text-gray-700 mb-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your right to use the Services ceases immediately</li>
                <li>You remain liable for all outstanding payments</li>
                <li>Provisions that by their nature should survive termination remain in effect</li>
                <li>We may delete your account data after a reasonable period</li>
              </ul>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">18. Force Majeure</h2>
              <p className="text-gray-700 mb-4">
                NeuralTale shall not be liable for any failure to perform its obligations under these Terms if such failure results from circumstances beyond our reasonable control, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Natural disasters, fire, flood, or severe weather</li>
                <li>War, terrorism, riots, or civil unrest</li>
                <li>Government actions, embargoes, or restrictions</li>
                <li>Strikes or labor disputes</li>
                <li>Internet or telecommunications failures</li>
                <li>Supplier failures or shortages</li>
                <li>Pandemics or public health emergencies</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">19. Dispute Resolution</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">19.1 Informal Resolution</h3>
              <p className="text-gray-700 mb-4">
                If you have any concerns or disputes, please contact us first at helpdesk@neuraltale.com. We will make good faith efforts to resolve disputes informally within 30 days.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">19.2 Arbitration</h3>
              <p className="text-gray-700 mb-4">
                If informal resolution fails, disputes shall be resolved through arbitration in accordance with the Arbitration Act of Tanzania. The arbitration shall be conducted in Dar es Salaam, Tanzania, in English or Swahili.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">19.3 Class Action Waiver</h3>
              <p className="text-gray-700 mb-4">
                You agree that any proceedings to resolve disputes will be conducted on an individual basis and not as a class action or representative proceeding.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">20. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United Republic of Tanzania, without regard to conflict of law principles.
              </p>
              <p className="text-gray-700 mb-4">
                The courts of Dar es Salaam, Tanzania shall have exclusive jurisdiction over any disputes arising from these Terms or our Services, except for arbitration proceedings as outlined above.
              </p>
            </div>

            {/* Modifications to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">21. Modifications to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending email notifications to registered users (for significant changes)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Your continued use of our Services after changes take effect constitutes acceptance of the modified Terms. If you do not agree to the changes, you must discontinue use of our Services.
              </p>
            </div>

            {/* Assignment */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">22. Assignment</h2>
              <p className="text-gray-700 mb-4">
                You may not assign or transfer these Terms or your rights and obligations without our prior written consent. We may assign these Terms to any affiliate or in connection with a merger, acquisition, or sale of assets.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">23. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">24. Entire Agreement</h2>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy and any project-specific agreements, constitute the entire agreement between you and NeuralTale Technologies regarding the use of our Services and supersede all prior agreements, understandings, and communications.
              </p>
            </div>

            {/* Waiver */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">25. Waiver</h2>
              <p className="text-gray-700 mb-4">
                No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to enforce any right or provision shall not constitute a waiver of that right or provision.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">26. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or comments about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">NeuralTale Technologies</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Address:</strong> Msimbazi Street, Dar es Salaam, Tanzania</p>
                  <p><strong>Email:</strong> <a href="mailto:helpdesk@neuraltale.com" className="text-blue-600 hover:text-blue-800">helpdesk@neuraltale.com</a></p>
                  <p><strong>Technical Support:</strong> <a href="mailto:juliusntale@neuraltale.com" className="text-blue-600 hover:text-blue-800">juliusntale@neuraltale.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+255653520829" className="text-blue-600 hover:text-blue-800">+255 653 520 829</a></p>
                  <p><strong>Alternative Phone:</strong> <a href="tel:+255746520819" className="text-blue-600 hover:text-blue-800">+255 746 520 819</a></p>
                  <p><strong>Website:</strong> <a href="https://neuraltale.com" className="text-blue-600 hover:text-blue-800">www.neuraltale.com</a></p>
                </div>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Acknowledgment</h2>
              <p className="text-blue-800">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE OUR SERVICES.
              </p>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
              <p>These Terms of Service are effective as of January 11, 2026</p>
              <p className="mt-2">
                <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>
                {' | '}
                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact Us</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
