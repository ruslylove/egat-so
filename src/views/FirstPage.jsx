import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import FileUploader from "../components/FileUploader";

export default function FirstPage() {
  return (
    <>
      <Container fluid>
        <Image
          src="https://www.egat.co.th/en/images/about-egat/logo-egat-color.jpg"
          alt="logo"
          rounded
        />
        <FileUploader />
      </Container>
    </>
  );
}
