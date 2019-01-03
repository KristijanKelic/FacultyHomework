import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PerfumesService } from 'src/app/services/perfumes.service';
import { Perfume } from 'src/app/models/perfume.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  perfume: Perfume;
  rate: number;
  @ViewChild('heart') heart: ElementRef;

  constructor(private _perfumesService: PerfumesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.perfume = this._perfumesService.getPerfumeWithId(params.id);
      });
  }

  addToFavorites() {
    this._perfumesService.addToFavorites(this.perfume);
    this.heart.nativeElement.style.color = 'red';
  }

  ratePerfume() {
    this._perfumesService.ratePerfume(this.perfume, this.rate);
  }
}
