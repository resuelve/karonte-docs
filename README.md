# karonte-docs
Documentación de karonte para crear leads

## Descripción
Los catálogos aqui descritos son los que demuestran como se deben llenar los dropdowns para las diferentes secciones del formulario de Leva Invierte.

En su implementación, el label puede ser lo que ustesdes deseen, lo importante es que el value lo manden tal cual se muestra.

Casi todos los catálogos son usables tal cual se expresan, excepto postalCode y moneyOrigin

## PostalCode
Postal code contiene un objeto con cada uno de los códigos postales de méxico. Dentro de cada elemento está la ciudad, estado, municipio y colonia.
El API de Leva invierte espera le manden los values de cada uno de estos elementos.
En la integración de cara al cliente, se debe consultar el código postal para posteriormente prellenarle los datos subsecuentes.
NOTA: No todos los códigos postales tienen una ciudad, esto es normal.

### MoneyOrigin
De igual manera, money origin llena los campos de profession y money_origin en el API.
profession es el dato que se obtiene de la raíz de cada objeto y money_origin es alguno de los expresados en el catálogo interno de dicha profesión.
