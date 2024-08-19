import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  standalone:true,
  imports: [TableModule]
})
export class HomeComponent implements OnInit {

  public customers = [{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
,{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},
{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
{
  id: 1000,
  name: 'James Butt',
  country: {
      name: 'Algeria',
      code: 'dz'
  },
  company: 'Benton, John B Jr',
  date: '2015-09-13',
  status: 'unqualified',
  verified: true,
  activity: 17,
  representative: {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
  },
  balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
,{
id: 1000,
name: 'James Butt',
country: {
    name: 'Algeria',
    code: 'dz'
},
company: 'Benton, John B Jr',
date: '2015-09-13',
status: 'unqualified',
verified: true,
activity: 17,
representative: {
    name: 'Ioni Bowcher',
    image: 'ionibowcher.png'
},
balance: 70663
},
];

  constructor() {}

  ngOnInit() {}
}
