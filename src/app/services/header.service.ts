import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  labelHeader: string[] = [
    'Case Study',
    'About Us',
    'Hire Developer',
    'Technology',
    'Industry',
  ];
}
