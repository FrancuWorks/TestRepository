function sprawdzanie(formularz){
    if (Sprawdzanie.a.value == Sprawdzanie.b.value && Sprawdzanie.b.value == Sprawdzanie.c.value ) {
           alert('TRÓJKĄT RÓWNOBOCZNY')
        }
        
        else if (Sprawdzanie.a.value == Sprawdzanie.b.value || Sprawdzanie.b.value == Sprawdzanie.c.value || 
            Sprawdzanie.a.value == Sprawdzanie.b.value && Sprawdzanie.a.value == Sprawdzanie.c.value  ) {
        
        alert("TRÓJKĄT RÓWNORAMIENNY")
        
        }
        
        
        
        else {
        
            alert("TRÓJKĄT RÓŻNOBOCZNY")
        
        }
}