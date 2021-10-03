import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { skills, experiences, projects, post} from '../profile';
import Link from 'next/link';

function Home() {
  return (
    <>
      <Head> <title> Mi Portafolio | Index  </title> </Head>
      <Layout>
        {/* Header card */}
        <header className='row'>
          <div className='col-md-12 '>
            <div className='card card-body bg-secondary text-light '>
              <div className='row'>
                <div className='col-md-4'>
                  <img src='ryan-ray-profile2.jpeg' alt='' className='img-fluid' />
                </div>
                <div className='col-md-8'>
                  <h1>Jhon Hernandez</h1>
                  <p> Suspendisse potenti. Nam condimentum vitae lacus porta pulvinar. Maecenas nulla lacus, porttitor non sapien at, iaculis fermentum diam. Praesent imperdiet bibendum felis sed scelerisque. Nullam nec consequat felis, sit amet. </p>
                  <a href='/hireme'> Hire me </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Secon section*/}
        <section>
          <div className='row'>

            <div className='col-md-4'>
              <div className='card bg-light'>
                <div className='card-body'>
                  <h1> Skills </h1>
                  {
                    skills.map((skill, idx) => (
                      <div key={idx}>
                        <h5> {skill.name} </h5>
                        <div className='progress'>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${skill.percent}%` }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100">
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div> {/** card-body  */}
              </div> {/** card */}
            </div> {/** col */}

            <div className='col-md-8'>
              <div className='card bg-light'>
                <div className='card-body'>
                  <h1> Experience </h1>
                  <ul>
                    {
                      experiences.map(({ name, from, to, description }, idx) => (
                        <li key={idx}>
                          <h3> {name} </h3>
                          <h5> {from} - {to ? to : 'current'} </h5>
                          <p> {description} </p>
                        </li>
                      ))
                    }
                  </ul>
                </div> {/** card-body  */}
                <Link href='/experience'>
                  <a className='btn btn-light'>
                    Conoce más
                  </a>
                </Link>
              </div> {/** card */}
            </div> {/** col */}
          </div>
        </section>

        {/* Porfolio */}
        <section>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-dark">
                <div className="row">
                  <div className="col-md-12 my-2">
                    <h1 className="text-center text-light">Portfolio</h1>
                  </div>
                  {projects.map(({ name, description, image }, index) => (
                    <div className="col-md-4 p-2" key={index}>
                      <div className="card h-100">
                        <div className="overflow">
                          <img
                            src={`/${image}`}
                            alt=""
                            className="card-img-top"
                          />
                        </div>
                        <div className="card-body">
                          <h3>{name}</h3>
                          <p>{description}</p>
                          <a href="#!">Know More</a>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-md-12 mt-4">
                    <div className="text-center">
                      <Link href="/portfolio">
                        <a className="btn btn-outline-light">More Projects</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}

export default Home;
