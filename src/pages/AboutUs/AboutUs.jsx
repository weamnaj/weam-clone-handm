export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <section className="about-us py-5">
      <Container>
        <div className="main text-center">
          <h1>{t('about.title')}</h1>
          <p className="py-3 px-3 px-md-5">
            {t('about.intro')}
          </p>
        </div>
        <hr className="m-auto" style={{ width: "200px" }} />
        <Row>
          <Col md="6"></Col>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>{t('about.fashionTitle')}</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                {t('about.fashionDesc')}
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>{t('about.missionTitle')}</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                {t('about.missionDesc')}
              </p>
            </div>
          </Col>
          <Col md="6"></Col>
        </Row>
        <hr />
        <Row>
          <Col md="6"></Col>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>{t('about.whoTitle')}</h2>
              <p className="px-3 px-md-5 mb-0 mt-3">
                {t('about.whoDesc')}
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>{t('about.statsTitle')}</h2>
              <ul className="text-end px-3 px-md-5 mb-0 mt-3">
                <li>{t('about.stats1')}</li>
                <li>{t('about.stats2')}</li>
                <li>{t('about.stats3')}</li>
              </ul>
            </div>
          </Col>
          <Col md="6"></Col>
        </Row>
        <hr />
        <Row>
          <Col md="6"></Col>
          <Col md="6" className="left text-end">
            <div className="sec text-center w-100 py-5">
              <h2>{t('about.didYouKnowTitle')}</h2>
              <ul className="text-end px-3 px-md-5 mb-0 mt-3">
                <li>{t('about.didYouKnow1')}</li>
                <li>{t('about.didYouKnow2')}</li>
                <li>{t('about.didYouKnow3')}</li>
                <li>{t('about.didYouKnow4')}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}