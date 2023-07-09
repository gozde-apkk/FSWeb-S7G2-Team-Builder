import React from "react";
import {Form,FormGroup,Input, Label,Button} from "reactstrap";


export default function (props) {
  const { member, handleChange, handleSubmit, resetForm } = props;
  return (
    
        <Form onSubmit={(event) => handleSubmit(event)}>
            <FormGroup>
          <Label>Üye Adı:</Label>
            
            <Input
              type="text"
              name="membername"
              value={member.membername}
              onChange={(event) => handleChange(event)}
            />
          
          </FormGroup>
          <br />
          <FormGroup>
          <Label>Üye Soyadı: </Label>
           
            <Input
              type="text"
              name="membersurname"
              value={member.membersurname}
              onChange={(event) => handleChange(event)}
            />
         
          </FormGroup>
          <br />
          <FormGroup>
          <Label>Üye Mail:</Label>
            
            <Input
              type="mail"
              name="membermail"
              value={member.membermail}
              onChange={(event) => handleChange(event)}
            />
          
          </FormGroup>
           <br />
          <FormGroup>
          <Label>Üye Rolü:</Label>
            
            <Input
              type="text"
              name="position"
              value={member.position}
              onChange={(event) => handleChange(event)}
            />
          
          </FormGroup>
          <br />
          
            <Button type="submit">Kaydet</Button>
            <Button type="change">Değiştir</Button>
            <Button type="reset" onClick={resetForm}>
              Temizle
            </Button>
          
        </Form>
      
     
    
  );
}