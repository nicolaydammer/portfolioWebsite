import {CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCarousel, CCarouselItem} from '@coreui/react'

export default function HorizontalCardScrolling() {

    return <div className={"cvCarousel"}>
        <CCarousel touch controls interval={10000}>
            <CCarouselItem>
                <CCard>
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />
                        </CCardText>
                    </CCardBody>
                </CCard>
            </CCarouselItem>
            <CCarouselItem>
                <CCard>
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />
                        </CCardText>
                    </CCardBody>
                </CCard>
            </CCarouselItem>
            <CCarouselItem>
                <CCard>
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />Some quick example text to build on the card title and make up the bulk of the card's
                            content. <br />
                        </CCardText>
                    </CCardBody>
                </CCard>
            </CCarouselItem>
        </CCarousel>
    </div>
}
