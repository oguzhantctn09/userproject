import { useState } from 'react';
import {Form, Button, Row, Col, Container} from "react-bootstrap";


const CreateUser = () => {
  var isValid;
  var parola;

  const valid = ( item ) => {
    let text = document.querySelector(`#${item}`);
    text.style.color = "green";
    text.style.opacity = "1";
  }
  const inValid = ( item ) => {
    let text = document.querySelector(`#${item}`);
    text.style.color = "gray";
    text.style.opacity = ".8";
  }
  

  var handlePassword = (e) => {
    isValid = false;
    parola = null;
    var password = e.target.value;
    
    /* Character Match  */
    if( password.match(/[A-Z]/) != null) {
      valid("capital")
    } else {
      inValid("capital")
    }
    if( password.match(/[0-9]/) != null) {
      valid("number")
    } else {
      inValid("number")
    }
    if( password.match(/[!^+$%?*]/) != null) {
      valid("char")
    } else {
      inValid("char")
    }
    if( password.length > 7) {
      valid("more8")
    } else {
      inValid("more8")
    }
    if( password.match(/[A-Z]/) != null) {
      if( password.match(/[0-9]/) != null) {
        if( password.match(/[!^+$%?*]/) != null) {
          if( password.length > 7) {
            isValid=true;
            parola = password;
          }
        }
      }
    }
    console.log({isValid});
 
    return [isValid, parola];
  };



    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var academic = null;



    // Başlangıçta Hoca checkbox inactive
    var [checked1, setCheckedHoca] = useState(false);

    // CheckBox'ta Hoca check edilince:
    const handleChangeHoca = () => {
      setCheckedHoca(!checked1);
      setCheckedOgrenci(false);  // checkbox'ta Öğrenci'yi false duruma getirir. 
    };

    // Başlangıçta Öğrenci checkbox inactive
    var [checked2, setCheckedOgrenci] = useState(false);
    // CheckBox'ta Hoca check edilince:
    const handleChangeOgrenci = () => {
      setCheckedOgrenci(!checked2);
      setCheckedHoca(false);  // checkbox'ta Hoca'yı false duruma getirir.  
    };
    var educheck = email.split("@");  //email @ sembulünden ayırır.
    var eduvalid = educheck[1];   //email'in domain kısmını alır.
    


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(parola);
      if(eduvalid.match(/.edu/) != null) {
        if (checked1 ===true && checked2===false) {
         academic="Hoca";
        } else if (checked2 ===true && checked1===false) {
         academic="Öğrenci";
        } else {
          academic="Akademik Statü Belirtilmedi"
        }
      } else {
       academic="Bilgi Yok";
      };



      if(isValid === true ) {
        
        try{
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, academic, parola})            
          });
        } catch(err) {
          console.log(err.message);
        }
      } else {
          console.log("hatalı parola");
          alert('Lütfen Parolayı en az 1 büyük harf, 1 sayı, 1 özel karakter olacak şekilde giriniz!')
      };
    };
            


    return (
      <div>
          <Form onSubmit={handleSubmit} className="mt-5">
          <Form.Group>
            <Row>
              <Col md={2}>
                <Form.Label >İSİM</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control
                  type="text" 
                  required
                  placeholder="İsim*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row  className="mt-3">
              <Col md={2} >
                <Form.Label>E-MAİL</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control
                  type="email" 
                  placeholder="E-mail*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}              
                />
              </Col>
            </Row>
          </Form.Group>  
          
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox" >
            <Row className="mt-3">
              <Col md={{ span: 3, offset: 3 }}>
                <Form.Check
                  type="checkbox"
                  checked={checked2}
                  onChange={handleChangeOgrenci}
                  label="Öğrenci">
                </Form.Check>

              </Col>
              <Col >
                <Form.Check
                  type="checkbox"
                  checked={checked1}
                  onChange={handleChangeHoca}
                  label="Hoca">
                </Form.Check>
              </Col>
            </Row>
          </Form.Group>

          
          <Form.Group>
            <Row>
              <Col md={2}>
                <Form.Label>PAROLA</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control  
                  placeholder="Parola*"
                  type="password"
                  required
                  onChange={handlePassword} 
                />
              </Col>
            </Row>
            <Container style={{marginTop:'20px'}}>
              <Row><Col md={{ span: 6, offset: 2 }}  className="mt=5"><p id="capital">Capital Letter</p></Col></Row>
              <Row><Col md={{ span: 6, offset: 2 }}><p id="number">Numbers</p></Col></Row>
              <Row><Col md={{ span: 6, offset: 2 }}><p id="char">Special Character(!^+$%?*)</p></Col></Row>
              <Row><Col md={{ span: 6, offset: 2 }}><p id="more8">8 Character</p></Col></Row>
            </Container>
          </Form.Group>  
          <Row >
            <Col  md={{ span: 4, offset: 4 }}>
              <Button type="submit" variant="outline-success">Add User</Button>     
            </Col>
          </Row>
        </Form>     
      </div>
    )
}
export default CreateUser;