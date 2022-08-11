# YCRUZ-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

### Steven Cruz

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'ycruz-product-card';
```

```
<ProductCard
    product={product}
    className='bg-dark text-white'                
    initialValues={{
    count: 4,
    // maxCount: 10
    }}
>
    {
    ({ increaseBy, count, reset, maxCount, isMaxCountReached }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )
    }
</ProductCard>
```