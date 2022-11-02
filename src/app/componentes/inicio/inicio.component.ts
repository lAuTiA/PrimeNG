import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  images=[
    {
      "previewImageSrc": "../../../assets/torpedo.jpg",
      "thumbnailImageSrc": "../../../assets/torpedo.jpg",
      "alt": "Mate Imperial Torpedo",
      "title": "Torpedo Imperial"
  },
  {
    "previewImageSrc": "../../../assets/blancoo.jpg",
    "thumbnailImageSrc": "../../../assets/blancoo.jpg",
    "alt": "Mate Imperial Torpedo",
    "title": "Torpedo Imperial"
},
{
  "previewImageSrc": "../../../assets/verde.webp",
  "thumbnailImageSrc": "../../../assets/verde.webp",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
},{
  "previewImageSrc": "../../../assets/canasta.jpg",
  "thumbnailImageSrc": "../../../assets/canasta.jpg",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
},
{
  "previewImageSrc": "../../../assets/tapa2.webp",
  "thumbnailImageSrc": "../../../assets/tapa2.webp",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
},
{
  "previewImageSrc": "../../../assets/sara.jpg",
  "thumbnailImageSrc": "../../../assets/sara.jpg",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
},
{
  "previewImageSrc": "../../../assets/yerbero.jpeg",
  "thumbnailImageSrc": "../../../assets/yerbero.jpeg",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
},
{
  "previewImageSrc": "../../../assets/amarillo.jpeg",
  "thumbnailImageSrc": "../../../assets/amarillo.jpeg",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
},
{
  "previewImageSrc": "../../../assets/clasico.jpg",
  "thumbnailImageSrc": "../../../assets/clasico.jpg",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
},
{
  "previewImageSrc": "../../../assets/pampa.jpg",
  "thumbnailImageSrc": "../../../assets/pampa.jpg",
  "alt": "Mate Imperial Torpedo",
  "title": "Torpedo Imperial"
}
  ]
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
