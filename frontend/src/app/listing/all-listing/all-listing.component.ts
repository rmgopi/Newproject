import { Component, OnInit } from '@angular/core';
import { ListingService } from '../service/listing.service';
import { Observable, observable } from 'rxjs';
import { Listing } from '../model/listing';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {

   listings$!: Observable<Listing[]>;

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.listings$ = this.listingService.getListings();
  }

}
