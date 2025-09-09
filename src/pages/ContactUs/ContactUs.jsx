// import React from "react";
// import { Container, Col, Row, Button } from "react-bootstrap";
// import "./ContactUs.css";
// import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";

// import { useTranslation } from "react-i18next";


//   const { t } = useTranslation();
//   const [first, setFirst] = useState(t('contact.notesInquiry', 'ملاحظات'));
//   const [second, setSecond] = useState(t('contact.type', 'النوع'));
//   const [third, setThird] = useState();

//   const handleFirstSelectChange = (e) => {
//     setFirst(e.target.value);
//     setSecond("");
//     setThird("");
//   };

//   return (
//     <section className="call-us">
//       <Container className="py-3">
//         <div className="call-us-main">
//           <h3 className="p-0 m-0">اتصل بنا</h3>
//           <hr className="mt-2" />
//           <p className="fw-bold">حدد قناة الاتصال المفضلة لديك</p>
//           <Form>
//             <div className="d-flex m-0 p-0 align-items-center rat">
//               <Form.Check
//                 type="radio"
//                 id="email"
//                 name="contact"
//                 label="البريد الإلكتروني"
//                 value="email"
//                 className="mx-2 d-flex"
//                 style={{ color: "black" }} // Adjust color if necessary
//               />
//               <Form.Check
//                 type="radio"
//                 id="mobile"
//                 name="contact"
//                 label="رقم الجوال"
//                 value="mobile"
//                 className="mx-2 d-flex"
//                 style={{ color: "black" }} // Adjust color if necessary
//               />
//             </div>
//             <Row className="my-3">
//               <Col xs="6">
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label="الاسم الأول"
//                   className=""
//                 >
//                   <Form.Control
//                     type="email"
//                     className="shadow-none border-0 "
//                     placeholder=""
//                     style={{ backgroundColor: "red" }}
//                   />
//                 </FloatingLabel>
//               </Col>
//               <Col xs="6">
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label="اسم العائلة"
//                   className="mb-3"
//                 >
//                   <Form.Control
//                     type="email"
//                     className="shadow-none border-0"
//                     placeholder=""
//                     dir="rtl"
//                   />
//                 </FloatingLabel>
//               </Col>
//             </Row>
//             <Row className="my-3 selected2">
//               <Col xs="6">
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label="رقم الجوال"
//                   className="ps-5"
//                 >
//                   <Form.Control
//                     dir="ltr"
//                     type="email"
//                     className="shadow-none border-0 d-block"
//                     placeholder=""
//                     style={{ backgroundColor: "red" }}
//                   />
//                   <p className="position-absolute class-220">20+</p>
//                 </FloatingLabel>
//               </Col>{" "}
//             </Row>
//             <Row className="my-3">
//               <Col>
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label="البريد الإلكتروني"
//                   className=""
//                 >
//                   <Form.Control
//                     type="email"
//                     className="shadow-none border-0 "
//                     placeholder=""
//                     style={{ backgroundColor: "red" }}
//                   />
//                 </FloatingLabel>
//               </Col>
//             </Row>
//             <Row className="mb-3 mt-5">
//               <Col xs="12" className="mb-3">
//                 <Form.Select
//                   aria-label="Default select example shadow-0"
//                   onChange={handleFirstSelectChange} // Handle first selection change
//                   className="rounded-0 shadow-none text-muted"
//                 >
//                   <option value="ملاحظات">ملاحظات</option>
//                   <option value="التسوق أونلاين">التسوق أونلاين</option>
//                   <option value="الملاحظات والاستفسار">
//                     الملاحظات والاستفسار
//                   </option>
//                 </Form.Select>
//               </Col>

//               {(first === "الملاحظات والاستفسار" ||
//                 first === "التسوق أونلاين") && (
//                 <Col xs="12" className="mb-3">
//                   <Form.Select
//                     className="rounded-0 shadow-none text-muted"
//                     aria-label="Default select example shadow-0"
//                     onChange={(e) => setSecond(e.target.value)} // Handle second selection change
//                   >
//                     <option value="النوع">النوع</option>
//                     <option value="الشكوى">الشكوى</option>
//                     <option value="الاستفسار">الاستفسار</option>
//                   </Form.Select>
//                 </Col>
//               )}

//               {second === t('contact.complaint') && (
//                 <Col xs="12" className="mb-3">
//                   <Form.Select
//                     aria-label="Default select example shadow-0"
//                     className="rounded-0 shadow-none text-muted"
//                     onChange={(e) => setThird(e.target.value)}
//                   >
//                     <option value={t('contact.chooseReason')}>{t('contact.chooseReason')}</option>
//                     <option value={t('contact.shayaClub')}>{t('contact.shayaClub')}</option>
//                     <option value={t('contact.defectiveProducts')}>{t('contact.defectiveProducts')}</option>
//                     <option value={t('contact.shayaCard')}>{t('contact.shayaCard')}</option>
//                     <option value={t('contact.amountNotReceived')}>{t('contact.amountNotReceived')}</option>
//                     <option value={t('contact.inStoreServices')}>{t('contact.inStoreServices')}</option>
//                     <option value={t('contact.other')}>{t('contact.other')}</option>
//                   </Form.Select>
//                 </Col>
//               )}

//               {second === t('contact.inquiry') && (
//                 <Col xs="12" className="mb-3">
//                   <Form.Select
//                     aria-label="Default select example shadow-0"
//                     className="rounded-0 shadow-none text-muted"
//                     onChange={(e) => setThird(e.target.value)}
//                   >
//                     <option value={t('contact.chooseReason')}>{t('contact.chooseReason')}</option>
//                     <option value={t('contact.shayaCard')}>{t('contact.shayaCard')}</option>
//                     <option value={t('contact.shayaClub')}>{t('contact.shayaClub')}</option>
//                     <option value={t('contact.returnPolicy')}>{t('contact.returnPolicy')}</option>
//                     <option value={t('contact.other')}>{t('contact.other')}</option>
//                   </Form.Select>
//                 </Col>
//               )}
//             </Row>
//             <Row className="my-3 selected">
//               <Col>
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label={t('contact.orderNumberOptional')}
//                   className=""
//                 >
//                   <Form.Control
//                     type="email"
//                     className="shadow-none border-0 "
//                     placeholder=""
//                     style={{ backgroundColor: "red" }}
//                   />
//                 </FloatingLabel>
//               </Col>
//             </Row>
//             <Row className="my-3 selected">
//               <Col>
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label={t('contact.missingItemsOptional')}
//                   className=""
//                 >
//                   <Form.Control
//                     type="email"
//                     className="shadow-none border-0 "
//                     placeholder=""
//                     style={{ backgroundColor: "red" }}
//                   />
//                 </FloatingLabel>
//               </Col>
//             </Row>
//             <Row className="my-3">
//               <Col>
//                 <FloatingLabel
//                   controlId="floatingInput"
//                   label={t('contact.textMessage')}
//                   className="position-relative"
//                 >
//                   <Form.Control
//                     type="email"
//                     className="shadow-none border-0"
//                     placeholder=""
//                     style={{ backgroundColor: "red" }}
//                   />
//                   <p className="position-absolute class-220">220</p>
//                 </FloatingLabel>
//               </Col>
//             </Row>
//             <Button className="mt-3 rounded-0 fw-blod bg-dark border-0">
//               {t('contact.send')}
//             </Button>
//           </Form>
//         </div>
//       </Container>
//     </section>
//   );
// // ...existing code...
import React, { useState } from "react";
import { Container, Col, Row, Button, Form, FloatingLabel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./ContactUs.css";

const ContactUs = () => {
  const { t } = useTranslation();

  const [first, setFirst] = useState(t("contactPage.notesInquiry"));
  const [second, setSecond] = useState(t("contactPage.type"));
  const [third, setThird] = useState("");

  const handleFirstSelectChange = (e) => {
    setFirst(e.target.value);
    setSecond("");
    setThird("");
  };

  return (
    <section className="call-us">
      <Container className="py-3">
        <div className="call-us-main">
          <h3 className="p-0 m-0">{t("contactPage.title")}</h3>
          <hr className="mt-2" />
          <p className="fw-bold">{t("contactPage.preferredChannel")}</p>
          <Form>
            {/* Radio buttons */}
            <div className="d-flex m-0 p-0 align-items-center rat">
              <Form.Check
                type="radio"
                id="email"
                name="contact"
                label={t("contactPage.email")}
                value="email"
                className="mx-2 d-flex"
              />
              <Form.Check
                type="radio"
                id="mobile"
                name="contact"
                label={t("contactPage.mobile")}
                value="mobile"
                className="mx-2 d-flex"
              />
            </div>

            {/* First + Last name */}
            <Row className="my-3">
              <Col xs="6">
                <FloatingLabel
                  controlId="firstName"
                  label={t("contactPage.firstName")}
                >
                  <Form.Control
                    type="text"
                    className="shadow-none border-0"
                    placeholder=""
                  />
                </FloatingLabel>
              </Col>
              <Col xs="6">
                <FloatingLabel
                  controlId="lastName"
                  label={t("contactPage.lastName")}
                >
                  <Form.Control
                    type="text"
                    className="shadow-none border-0"
                    placeholder=""
                  />
                </FloatingLabel>
              </Col>
            </Row>

            {/* Phone number */}
            <Row className="my-3 selected2">
              <Col xs="6">
                <FloatingLabel
                  controlId="phoneNumber"
                  label={t("contactPage.phoneNumber")}
                  className="ps-5"
                >
                  <Form.Control
                    dir="ltr"
                    type="text"
                    className="shadow-none border-0 d-block"
                    placeholder=""
                  />
                  <p className="position-absolute class-220">+20</p>
                </FloatingLabel>
              </Col>
            </Row>

            {/* Email */}
            <Row className="my-3">
              <Col>
                <FloatingLabel
                  controlId="emailAddress"
                  label={t("contactPage.emailAddress")}
                >
                  <Form.Control
                    type="email"
                    className="shadow-none border-0"
                    placeholder=""
                  />
                </FloatingLabel>
              </Col>
            </Row>

            {/* Dropdowns */}
            <Row className="mb-3 mt-5">
              <Col xs="12" className="mb-3">
                <Form.Select
                  aria-label="notesInquiry"
                  onChange={handleFirstSelectChange}
                  className="rounded-0 shadow-none text-muted"
                >
                  <option value={t("contactPage.notesInquiry")}>
                    {t("contactPage.notesInquiry")}
                  </option>
                  <option value="shopping">{t("contactPage.onlineShopping", "التسوق أونلاين")}</option>
                  <option value="inquiry">{t("contactPage.inquiry")}</option>
                </Form.Select>
              </Col>

              {(first === "التسوق أونلاين" || first === t("contactPage.inquiry")) && (
                <Col xs="12" className="mb-3">
                  <Form.Select
                    className="rounded-0 shadow-none text-muted"
                    onChange={(e) => setSecond(e.target.value)}
                  >
                    <option value={t("contactPage.type")}>{t("contactPage.type")}</option>
                    <option value={t("contactPage.complaint")}>{t("contactPage.complaint")}</option>
                    <option value={t("contactPage.inquiry")}>{t("contactPage.inquiry")}</option>
                  </Form.Select>
                </Col>
              )}

              {second === t("contactPage.complaint") && (
                <Col xs="12" className="mb-3">
                  <Form.Select
                    className="rounded-0 shadow-none text-muted"
                    onChange={(e) => setThird(e.target.value)}
                  >
                    <option>{t("contactPage.chooseReason")}</option>
                    <option>{t("contactPage.shayaClub")}</option>
                    <option>{t("contactPage.defectiveProducts")}</option>
                    <option>{t("contactPage.shayaCard")}</option>
                    <option>{t("contactPage.amountNotReceived")}</option>
                    <option>{t("contactPage.inStoreServices")}</option>
                    <option>{t("contactPage.other")}</option>
                  </Form.Select>
                </Col>
              )}

              {second === t("contactPage.inquiry") && (
                <Col xs="12" className="mb-3">
                  <Form.Select
                    className="rounded-0 shadow-none text-muted"
                    onChange={(e) => setThird(e.target.value)}
                  >
                    <option>{t("contactPage.chooseReason")}</option>
                    <option>{t("contactPage.shayaCard")}</option>
                    <option>{t("contactPage.shayaClub")}</option>
                    <option>{t("contactPage.returnPolicy")}</option>
                    <option>{t("contactPage.other")}</option>
                  </Form.Select>
                </Col>
              )}
            </Row>

            {/* Optional fields */}
            <Row className="my-3 selected">
              <Col>
                <FloatingLabel
                  controlId="orderNumber"
                  label={t("contactPage.orderNumberOptional")}
                >
                  <Form.Control type="text" className="shadow-none border-0" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="my-3 selected">
              <Col>
                <FloatingLabel
                  controlId="missingItems"
                  label={t("contactPage.missingItemsOptional")}
                >
                  <Form.Control type="text" className="shadow-none border-0" />
                </FloatingLabel>
              </Col>
            </Row>

            {/* Message */}
            <Row className="my-3">
              <Col>
                <FloatingLabel
                  controlId="message"
                  label={t("contactPage.textMessage")}
                  className="position-relative"
                >
                  <Form.Control type="text" className="shadow-none border-0" />
                  <p className="position-absolute class-220">220</p>
                </FloatingLabel>
              </Col>
            </Row>

            {/* Submit */}
            <Button className="mt-3 rounded-0 fw-bold bg-dark border-0">
              {t("contactPage.send")}
            </Button>
          </Form>
          <h6>thank u</h6>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
