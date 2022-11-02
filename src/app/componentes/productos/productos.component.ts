import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products=[
  {
    name:"Camionero",
    price:"15.000",
    img:"../../../assets/camionero.jpg"
  },
  {
    name:"Torpedo imperial",
    price:"10.000",
    img:"../../../assets/imperial.jpg"
  },
  {
    name:"Pico del Rey",
    price:"5500",
    img:"../../../assets/dorado2.jpg"
  },
  {
    name:"Llerva Canarias",
    price:"1600",
    img:"../../../assets/canarias.jpg"
  },
  {
    name:"Torpedo Imperial Cincelado repujado",
    price:"25.000",
    img:"../../../assets/cincelado.jpg"
  },
  {
    name:"Imperial cincelado",
    price:"15.000",
    img:"../../../assets/mate32.webp"
  }
  ];
  mates2=[
    {
      name:"Mate Porongo",
      price:"4.000",
      img:"../../../assets/porongo.jpg"
    },
    {
      name:"Pico Loro",
      price:"2.000",
      img:"../../../assets/pico.jpg"
    },
    {
      name:"Camionero Uruguayo Liso",
      price:"12.000",
      img:"../../../assets/liso.jpg"
    },
    {
      name:"Pico De Rey",
      price:"6.000",
      img:"../../../assets/bombi.jpg"
    },
    {
      name:"Imperial Cincelado Repujado",
      price:"18.000",
      img:"../../../assets/azul.jpg"
    },
    {
      name:"Imperial Cincelado Premiun",
      price:"14.500",
      img:"../../../assets/turquesa.jpg"
    },
   ];
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}






