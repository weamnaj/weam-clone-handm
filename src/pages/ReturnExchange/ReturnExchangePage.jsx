import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import step1M from "../../assets/ReturnExchangeImages/imag1mobile.jpg";
import step2M from "../../assets/ReturnExchangeImages/image2mobile.jpg";
import step3M from "../../assets/ReturnExchangeImages/image3mobile.jpg";
import step4M from "../../assets/ReturnExchangeImages/image4mobile.jpg";
import step5M from "../../assets/ReturnExchangeImages/image5mobile.jpg";
import step6M from "../../assets/ReturnExchangeImages/image6mobile.jpg";
import step1B from "../../assets/ReturnExchangeImages/image1Browser.jpg";
import step2B from "../../assets/ReturnExchangeImages/image2Browser.jpg";
import step3B from "../../assets/ReturnExchangeImages/image3Browser.jpg";
import step4B from "../../assets/ReturnExchangeImages/image4Browser.jpg";
import step5B from "../../assets/ReturnExchangeImages/image5Browser.jpg";
import step6B from "../../assets/ReturnExchangeImages/image6Browser.jpg";
import { useState, useEffect } from "react";
import "./ReturnExchangeStyle.css";

function ReturnExchange() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="returnExchange col-lg-10 col-md-12">
        <h1>How to Return or Exchange an Item</h1>
        <p>
          We want you to be completely satisfied with your purchase. If you are
          not satisfied, you may return or exchange the item within 30 days of
          receipt. Please ensure the item is in its original condition, unused,
          and with all tags and packaging intact.
        </p>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Step 1: Prepare Your Return</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <h5>Mobile:</h5>
                  <img
                    src={step1M}
                    alt="Step 1 Mobile"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
                <Col md={6}>
                  <h5>Browser:</h5>
                  <img
                    src={step1B}
                    alt="Step 1 Browser"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
              </Row>
              <p>
                To initiate a return, please ensure that the item is in its
                original condition, unused, and with all tags and packaging
                intact. Locate your order number and the email address used for
                the purchase.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Step 2: Fill Out the Return Form</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <h5>Mobile:</h5>
                  <img
                    src={step2M}
                    alt="Step 2 Mobile"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
                <Col md={6}>
                  <h5>Browser:</h5>
                  <img
                    src={step2B}
                    alt="Step 2 Browser"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
              </Row>
              <p>
                Download and print the{" "}
                <a href="/return-form" target="_blank" rel="noopener noreferrer">
                  return form
                </a>
                . Fill out the required information, including your order number,
                item details, and the reason for the return. Include this form in
                your return package.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Step 3: Pack Your Return</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <h5>Mobile:</h5>
                  <img
                    src={step3M}
                    alt="Step 3 Mobile"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
                <Col md={6}>
                  <h5>Browser:</h5>
                  <img
                    src={step3B}
                    alt="Step 3 Browser"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
              </Row>
              <p>
                Carefully pack the item in its original packaging, if possible.
                Ensure that all items, including accessories, tags, and
                documentation, are included. Seal the package securely to prevent
                any damage during transit.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Step 4: Ship Your Return</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <h5>Mobile:</h5>
                  <img
                    src={step4M}
                    alt="Step 4 Mobile"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
                <Col md={6}>
                  <h5>Browser:</h5>
                  <img
                    src={step4B}
                    alt="Step 4 Browser"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
              </Row>
              <p>
                Ship the package to the address provided on the return form. We
                recommend using a trackable shipping service or purchasing
                shipping insurance to ensure your return is received. Keep the
                shipping receipt and tracking number for your records.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Step 5: Exchange (if applicable)</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <h5>Mobile:</h5>
                  <img
                    src={step5M}
                    alt="Step 5 Mobile"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
                <Col md={6}>
                  <h5>Browser:</h5>
                  <img
                    src={step5B}
                    alt="Step 5 Browser"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
              </Row>
              <p>
                If you requested an exchange, your new item will be processed
                once we receive and inspect your return. You will receive a
                confirmation email with tracking information for the exchanged
                item.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Step 6: Refund Process</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6}>
                  <h5>Mobile:</h5>
                  <img
                    src={step6M}
                    alt="Step 6 Mobile"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
                <Col md={6}>
                  <h5>Browser:</h5>
                  <img
                    src={step6B}
                    alt="Step 6 Browser"
                    className="img-fluid d-block mx-auto"
                  />
                </Col>
              </Row>
              <p>
                Refunds will be issued to the original payment method within 7-10
                business days after we receive your return. You will receive a
                notification email once the refund is processed. Please note that
                it may take additional time for the refund to reflect in your
                account, depending on your bank or payment provider.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <h2>FAQs</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Can I return an item without the original packaging?</td>
              <td>
                Unfortunately, we cannot accept returns without the original
                packaging. Please ensure that all items are returned in their
                original condition and packaging.
              </td>
            </tr>
            <tr>
              <td>How long does the return process take?</td>
              <td>
                Once we receive your return, please allow 7-10 business days for
                the refund to be processed. Exchanges may take additional time
                depending on the availability of the new item.
              </td>
            </tr>
            <tr>
              <td>What should I do if I receive a damaged or incorrect item?</td>
              <td>
                We apologize for any inconvenience. Please contact our customer
                service immediately with your order number and details about the
                issue. We will assist you in resolving the problem promptly.
              </td>
            </tr>
            <tr>
              <td>Can I return an item purchased on sale?</td>
              <td>
                Items purchased on sale or with a discount are eligible for
                return. However, final sale items cannot be returned or exchanged.
              </td>
            </tr>
            <tr>
              <td>How will I be notified about my return status?</td>
              <td>
                You will receive email notifications regarding the status of your
                return, including confirmation when we receive your return and
                when the refund or exchange is processed.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ReturnExchange;