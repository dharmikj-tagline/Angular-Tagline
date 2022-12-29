import { Injectable } from '@angular/core';
import { ContactFormDetail } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contactFormDetail:ContactFormDetail[]= [
    {
      country: 'India (HQ)',
      place:
        'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101',
      mobile: '+91 9913 808 285',
    },
    {
      country: 'U.S.A',
      place: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
      mobile: '+1 (404) 483-3388',
    },
    {
      country: 'United Kingdom',
      place: '65 Byron road North wembley Middlesex, london HA0 3PB',
      mobile: '+44 78240 75400',
    },
  ];
}
