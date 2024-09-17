import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="px-20 py-10 h-full mb-2 ring-2 ring-red-600">
      <div className="flex flex-row gap-10">
        <div>
          {/* topbar */}
          <header className="text-red-600 text-2xl font-bold font-serif">
            Buletin
          </header>
        </div>
        <div className="float-left">
          <ul className="flex flex-row gap-10 mt-2 font-bold">
            <li>Stories</li>
            <li>Creator</li>
            <li>Community</li>
            <li>Suubscribe</li>
          </ul>
        </div>
        <div className="flex flex-row gap-10 mt-2 items-end justify-end ml-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <Link href="" className="font-bold ">
            Write
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <img
            className="w-10 h-10 rounded-full"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>

      {/* second part bageground gray */}

      <div className="bg-slate-300 mt-10 p-10 text-center text-xl">
        <h3 className="text-center text-gray-600 text-sm">
          WELCOME TO BULETIN
        </h3>
        <br />
       <div className="flex flex-row justify-center items-center">
       <h1 className="">Craft narrative</h1>
        <img className="w-8 mx-2" src="https://cdn.pixabay.com/photo/2013/07/13/12/52/hand-160538_1280.png" alt="" />
        <h1 className="">
          that ignite <span className="text-red-600">inspiration</span>
        </h1>
        <img className="w-7 h-6 mx-2" src="data:image/jpeg;base64,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" alt="" />
        <h1> ,</h1>
       </div>
       <div className="flex flex-row items-center justify-center mt-2">
       <h1>
          <span className="text-red-600">knowledge</span>
        </h1>
        <img className="w-6 h-6 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEri5fTiFicfL8OujAFH-EuM3vF9z4z2Gow&s" alt="" />
        <h1>
          , and <span className="text-red-600">entertainment</span>
        </h1>
        <img className="w-6 h-6 ml-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeNc6ACZC--F_glJP06V4Z4_L_URWg-Kqzg&s" alt="" />
       </div>
      </div>
      {/* third part, MAIN  */}
      <div className="flex flex-row py-10 w-full">
        <div className="w-1/2">
          <img
            className=" rounded-lg"
            src="https://blog.philo.com/wp-content/uploads/2023/09/John-Wick_Chapter-4.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 ps-10 pt-6">
          <div className="flex flex-row gap-4">
            <img
              className="rounded-full w-1/12 "
              src="https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/360773/360773-1520262091652-fa603e15cdcd2.jpg"
              alt=""
            />
            <h2 className="">Netflix</h2>
            <h2>. 12 minutes ago</h2>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-serif mt-8">
              Where To Watch 'John <br /> Wick: Chapter 4'
            </h1>
            <p className="mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              optio, illum quibusdam ipsa, nemo harum repellat distinctio odit
              obcaecati impedit velit quos magnam, hic itaque porro! Dolor harum
              impedit quas......
            </p>
            <h2 className="mt-8">
              <span className="text-red-600 font-bold">Movies </span> . 4 min
              read
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-center">
        <h1 className="text-xl font-bold">Latest News</h1>
        <h2 className="text-red-600 font-bold pt-1 flex ml-auto ">
          See all &#8594;{" "}
        </h2>
      </div>
      {/* last colum */}
      <div className="flex flex-row w-full pt-10 gap-6">
        {/* 1 */}
        <div className="flex flex-col w-1/4">
          <img
            src="https://c8.alamy.com/comp/DB11G3/british-formula-one-driver-lewis-hamilton-l-of-mclaren-mercedes-is-DB11G3.jpg"
            alt=""
          />
          <div className="flex flex-row gap-2 pt-6">
            <img
              className="w-1/12 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX/////HgD/AAD/sq7/FAD/b2f/ZVz/W1H/paH/EAD/oZ3/rqr/kIv/lZD/2tj/v7z/0c//xsP/qqb/OCr/zMr/nJf/7ez/sKz/4d//6ej/RDj/09H/wb7/3Nr/urf/trL/d3D/gnz/VUv/T0T/KRb/PjH/iIL/cGj/9/f/aWH/hoD/MSH/Sj7/fnj/Vk3/XlXA96whAAADuElEQVR4nO3ca3OiMBSHcYmogFVR0eL9fqvafv9vt4pxtzuzs3NCgzln+P9eN5P4DAqFaKUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR2HaTtOpp35YlHloBdny+q+G4wJhgU3mnWij/rYV9yss+U1jcZEBYZKopN3nyP0fY8ZVc9W2FMmY3pFhZoNLvdMhb3an1GnbJFNDq3St9sRxe5o+kPV2LSaj5XJKl5PHbi0CnzOx9SdWmYLNfu8ahaQqhryPqhu1JVHq3affSpPrXK0erffasX9DXijPli0anv8DytPveVoVbXeaiAgFZdWDRGtWtlaA7etRh7Xa/Xv1CBHq4XtVrGAT/bb6444tKpKeAt6KuDQqiWjVY9Dq6uMVs0crea2W9VktFpwaFVHKzIRl1ee6mSLjdy2WstoNeXQaiOjVTdHq05JWyUcWl3Qimws4d9BT8U5Wk05tfJfRk1ktvLD54PdbX+8Wa8/G8XbsGi1M2t177S5RvM4LXi3wD9JanU7lPadke0l0Jm16tqevk9v5avtILU9vxExrXy1SWzPbsjo2YD9VmdyK7WL/xo5nEyrUWu/Wh4OtaI1JgxaHcmt/O/PcSfR4axPhuEr6LmltFKX32e+RT3bpWWw7p/S92Qct9pSX7J+RFepjK6v334krZW+XDkuHexoy9XK9pno6BFb+UpfLjRdbP7T96KEtAq3+uPKyY1UYa36x2xA6ru4MaHvr7htNaTuOQ7HjwGJk+fUPFpRT/1q8xiwcHJvUFirz8cAo2091uiTsFmr+D+vu9hWX48BRv++WqNbGW0osN5qRP340d9cQCvKzDWnrbqiWi3FtZo4a/XYYe5oe6mwVqvSt0qps6s9WpFbtZy2SkS1GpS+1YzcKmDQ6s2oVdtZq17pW7XJrfS3ENzsWxbWau60Vcyg1YTcapqjla1tMqGwVl2zVtlPPHjjdd2KBodWMblVYtLqVqoRJda30pi1mlmend5KX63QWqmz/S/vVVy3Sgpp5RfwPcc7Ka30zKRW4e5oeZ0Pblt1ya30o1RSq+fNedvctpqST2upwXKfN+dtk9JqZLDcolrtjVrZ3oPYobYK9QVAiVvNqa18tCK38vSZrcStqI/cw61Rq7rlZWpCWp3R6p3aqq8H0FqdLC9TE9JqpweUuFVA/QHKix6wIv11zfIytSt1tRnbrYYB8ZdNn5vb0x7pzy0v02xyvWK334cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQ4RefWm3rbDInmwAAAABJRU5ErkJggg=="
              alt=""
            />
            <h2 className="font-bold">Formula 1</h2>
            <h2>. 3 hours ago</h2>
          </div>
          <h1 className="text-xl font-bold pt-6">
            Formula 1® and the FIA confirm Bahrain will host 2025 Pre-Season
            Testing
          </h1>
          <a href="" className="pt-6">
            The circuit has hosted pre-season testing on six separate occasions
            since 2009, with its consistent weather conditions, mixture of high
            and low speed corners, and two long straights enabling the ten
            Formula 1 teams to put their cars through their paces and gather
            maximum data ahead of the season.
          </a>
          <div className="flex flex-row pt-6">
          <h2 className="font-bold text-red-600 pr-6">Sports</h2>
          <h2> . 1 hours ago</h2>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col w-1/4 ">
          <img
            src="https://c8.alamy.com/comp/DB11G3/british-formula-one-driver-lewis-hamilton-l-of-mclaren-mercedes-is-DB11G3.jpg"
            alt=""
          />
          <div className="flex flex-row gap-2 pt-6">
            <img
              className="w-1/12 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX/////HgD/AAD/sq7/FAD/b2f/ZVz/W1H/paH/EAD/oZ3/rqr/kIv/lZD/2tj/v7z/0c//xsP/qqb/OCr/zMr/nJf/7ez/sKz/4d//6ej/RDj/09H/wb7/3Nr/urf/trL/d3D/gnz/VUv/T0T/KRb/PjH/iIL/cGj/9/f/aWH/hoD/MSH/Sj7/fnj/Vk3/XlXA96whAAADuElEQVR4nO3ca3OiMBSHcYmogFVR0eL9fqvafv9vt4pxtzuzs3NCgzln+P9eN5P4DAqFaKUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR2HaTtOpp35YlHloBdny+q+G4wJhgU3mnWij/rYV9yss+U1jcZEBYZKopN3nyP0fY8ZVc9W2FMmY3pFhZoNLvdMhb3an1GnbJFNDq3St9sRxe5o+kPV2LSaj5XJKl5PHbi0CnzOx9SdWmYLNfu8ahaQqhryPqhu1JVHq3affSpPrXK0erffasX9DXijPli0anv8DytPveVoVbXeaiAgFZdWDRGtWtlaA7etRh7Xa/Xv1CBHq4XtVrGAT/bb6444tKpKeAt6KuDQqiWjVY9Dq6uMVs0crea2W9VktFpwaFVHKzIRl1ee6mSLjdy2WstoNeXQaiOjVTdHq05JWyUcWl3Qimws4d9BT8U5Wk05tfJfRk1ktvLD54PdbX+8Wa8/G8XbsGi1M2t177S5RvM4LXi3wD9JanU7lPadke0l0Jm16tqevk9v5avtILU9vxExrXy1SWzPbsjo2YD9VmdyK7WL/xo5nEyrUWu/Wh4OtaI1JgxaHcmt/O/PcSfR4axPhuEr6LmltFKX32e+RT3bpWWw7p/S92Qct9pSX7J+RFepjK6v334krZW+XDkuHexoy9XK9pno6BFb+UpfLjRdbP7T96KEtAq3+uPKyY1UYa36x2xA6ru4MaHvr7htNaTuOQ7HjwGJk+fUPFpRT/1q8xiwcHJvUFirz8cAo2091uiTsFmr+D+vu9hWX48BRv++WqNbGW0osN5qRP340d9cQCvKzDWnrbqiWi3FtZo4a/XYYe5oe6mwVqvSt0qps6s9WpFbtZy2SkS1GpS+1YzcKmDQ6s2oVdtZq17pW7XJrfS3ENzsWxbWau60Vcyg1YTcapqjla1tMqGwVl2zVtlPPHjjdd2KBodWMblVYtLqVqoRJda30pi1mlmend5KX63QWqmz/S/vVVy3Sgpp5RfwPcc7Ka30zKRW4e5oeZ0Pblt1ya30o1RSq+fNedvctpqST2upwXKfN+dtk9JqZLDcolrtjVrZ3oPYobYK9QVAiVvNqa18tCK38vSZrcStqI/cw61Rq7rlZWpCWp3R6p3aqq8H0FqdLC9TE9JqpweUuFVA/QHKix6wIv11zfIytSt1tRnbrYYB8ZdNn5vb0x7pzy0v02xyvWK334cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQ4RefWm3rbDInmwAAAABJRU5ErkJggg=="
              alt=""
            />
            <h2 className="font-bold">Formula 1</h2>
            <h2>. 3 hours ago</h2>
          </div>
          <h1 className="text-xl font-bold pt-6">
            Formula 1® and the FIA confirm Bahrain will host 2025 Pre-Season
            Testing
          </h1>
          <a href="" className="pt-6">
            The circuit has hosted pre-season testing on six separate occasions
            since 2009, with its consistent weather conditions, mixture of high
            and low speed corners, and two long straights enabling the ten
            Formula 1 teams to put their cars through their paces and gather
            maximum data ahead of the season.
          </a>
          <div className="flex flex-row pt-6">
          <h2 className="font-bold text-red-600 pr-6">Sports</h2>
          <h2> . 1 hours ago</h2>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-col w-1/4">
          <img
            src="https://c8.alamy.com/comp/DB11G3/british-formula-one-driver-lewis-hamilton-l-of-mclaren-mercedes-is-DB11G3.jpg"
            alt=""
          />
          <div className="flex flex-row gap-2 pt-6">
            <img
              className="w-1/12 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX/////HgD/AAD/sq7/FAD/b2f/ZVz/W1H/paH/EAD/oZ3/rqr/kIv/lZD/2tj/v7z/0c//xsP/qqb/OCr/zMr/nJf/7ez/sKz/4d//6ej/RDj/09H/wb7/3Nr/urf/trL/d3D/gnz/VUv/T0T/KRb/PjH/iIL/cGj/9/f/aWH/hoD/MSH/Sj7/fnj/Vk3/XlXA96whAAADuElEQVR4nO3ca3OiMBSHcYmogFVR0eL9fqvafv9vt4pxtzuzs3NCgzln+P9eN5P4DAqFaKUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR2HaTtOpp35YlHloBdny+q+G4wJhgU3mnWij/rYV9yss+U1jcZEBYZKopN3nyP0fY8ZVc9W2FMmY3pFhZoNLvdMhb3an1GnbJFNDq3St9sRxe5o+kPV2LSaj5XJKl5PHbi0CnzOx9SdWmYLNfu8ahaQqhryPqhu1JVHq3affSpPrXK0erffasX9DXijPli0anv8DytPveVoVbXeaiAgFZdWDRGtWtlaA7etRh7Xa/Xv1CBHq4XtVrGAT/bb6444tKpKeAt6KuDQqiWjVY9Dq6uMVs0crea2W9VktFpwaFVHKzIRl1ee6mSLjdy2WstoNeXQaiOjVTdHq05JWyUcWl3Qimws4d9BT8U5Wk05tfJfRk1ktvLD54PdbX+8Wa8/G8XbsGi1M2t177S5RvM4LXi3wD9JanU7lPadke0l0Jm16tqevk9v5avtILU9vxExrXy1SWzPbsjo2YD9VmdyK7WL/xo5nEyrUWu/Wh4OtaI1JgxaHcmt/O/PcSfR4axPhuEr6LmltFKX32e+RT3bpWWw7p/S92Qct9pSX7J+RFepjK6v334krZW+XDkuHexoy9XK9pno6BFb+UpfLjRdbP7T96KEtAq3+uPKyY1UYa36x2xA6ru4MaHvr7htNaTuOQ7HjwGJk+fUPFpRT/1q8xiwcHJvUFirz8cAo2091uiTsFmr+D+vu9hWX48BRv++WqNbGW0osN5qRP340d9cQCvKzDWnrbqiWi3FtZo4a/XYYe5oe6mwVqvSt0qps6s9WpFbtZy2SkS1GpS+1YzcKmDQ6s2oVdtZq17pW7XJrfS3ENzsWxbWau60Vcyg1YTcapqjla1tMqGwVl2zVtlPPHjjdd2KBodWMblVYtLqVqoRJda30pi1mlmend5KX63QWqmz/S/vVVy3Sgpp5RfwPcc7Ka30zKRW4e5oeZ0Pblt1ya30o1RSq+fNedvctpqST2upwXKfN+dtk9JqZLDcolrtjVrZ3oPYobYK9QVAiVvNqa18tCK38vSZrcStqI/cw61Rq7rlZWpCWp3R6p3aqq8H0FqdLC9TE9JqpweUuFVA/QHKix6wIv11zfIytSt1tRnbrYYB8ZdNn5vb0x7pzy0v02xyvWK334cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQ4RefWm3rbDInmwAAAABJRU5ErkJggg=="
              alt=""
            />
            <h2 className="font-bold">Formula 1</h2>
            <h2>. 3 hours ago</h2>
          </div>
          <h1 className="text-xl font-bold pt-6">
            Formula 1® and the FIA confirm Bahrain will host 2025 Pre-Season
            Testing
          </h1>
          <a href="" className="pt-6">
            The circuit has hosted pre-season testing on six separate occasions
            since 2009, with its consistent weather conditions, mixture of high
            and low speed corners, and two long straights enabling the ten
            Formula 1 teams to put their cars through their paces and gather
            maximum data ahead of the season.
          </a>
          <div className="flex flex-row pt-6">
          <h2 className="font-bold text-red-600 pr-6">Sports</h2>
          <h2> . 1 hours ago</h2>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col w-1/4">
          <img
            src="https://c8.alamy.com/comp/DB11G3/british-formula-one-driver-lewis-hamilton-l-of-mclaren-mercedes-is-DB11G3.jpg"
            alt=""
          />
          <div className="flex flex-row gap-2 pt-6">
            <img
              className="w-1/12 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX/////HgD/AAD/sq7/FAD/b2f/ZVz/W1H/paH/EAD/oZ3/rqr/kIv/lZD/2tj/v7z/0c//xsP/qqb/OCr/zMr/nJf/7ez/sKz/4d//6ej/RDj/09H/wb7/3Nr/urf/trL/d3D/gnz/VUv/T0T/KRb/PjH/iIL/cGj/9/f/aWH/hoD/MSH/Sj7/fnj/Vk3/XlXA96whAAADuElEQVR4nO3ca3OiMBSHcYmogFVR0eL9fqvafv9vt4pxtzuzs3NCgzln+P9eN5P4DAqFaKUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR2HaTtOpp35YlHloBdny+q+G4wJhgU3mnWij/rYV9yss+U1jcZEBYZKopN3nyP0fY8ZVc9W2FMmY3pFhZoNLvdMhb3an1GnbJFNDq3St9sRxe5o+kPV2LSaj5XJKl5PHbi0CnzOx9SdWmYLNfu8ahaQqhryPqhu1JVHq3affSpPrXK0erffasX9DXijPli0anv8DytPveVoVbXeaiAgFZdWDRGtWtlaA7etRh7Xa/Xv1CBHq4XtVrGAT/bb6444tKpKeAt6KuDQqiWjVY9Dq6uMVs0crea2W9VktFpwaFVHKzIRl1ee6mSLjdy2WstoNeXQaiOjVTdHq05JWyUcWl3Qimws4d9BT8U5Wk05tfJfRk1ktvLD54PdbX+8Wa8/G8XbsGi1M2t177S5RvM4LXi3wD9JanU7lPadke0l0Jm16tqevk9v5avtILU9vxExrXy1SWzPbsjo2YD9VmdyK7WL/xo5nEyrUWu/Wh4OtaI1JgxaHcmt/O/PcSfR4axPhuEr6LmltFKX32e+RT3bpWWw7p/S92Qct9pSX7J+RFepjK6v334krZW+XDkuHexoy9XK9pno6BFb+UpfLjRdbP7T96KEtAq3+uPKyY1UYa36x2xA6ru4MaHvr7htNaTuOQ7HjwGJk+fUPFpRT/1q8xiwcHJvUFirz8cAo2091uiTsFmr+D+vu9hWX48BRv++WqNbGW0osN5qRP340d9cQCvKzDWnrbqiWi3FtZo4a/XYYe5oe6mwVqvSt0qps6s9WpFbtZy2SkS1GpS+1YzcKmDQ6s2oVdtZq17pW7XJrfS3ENzsWxbWau60Vcyg1YTcapqjla1tMqGwVl2zVtlPPHjjdd2KBodWMblVYtLqVqoRJda30pi1mlmend5KX63QWqmz/S/vVVy3Sgpp5RfwPcc7Ka30zKRW4e5oeZ0Pblt1ya30o1RSq+fNedvctpqST2upwXKfN+dtk9JqZLDcolrtjVrZ3oPYobYK9QVAiVvNqa18tCK38vSZrcStqI/cw61Rq7rlZWpCWp3R6p3aqq8H0FqdLC9TE9JqpweUuFVA/QHKix6wIv11zfIytSt1tRnbrYYB8ZdNn5vb0x7pzy0v02xyvWK334cBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQ4RefWm3rbDInmwAAAABJRU5ErkJggg=="
              alt=""
            />
            <h2 className="font-bold">Formula 1</h2>
            <h2>. 3 hours ago</h2>
          </div>
          <h1 className="text-xl font-bold pt-6">
            Formula 1® and the FIA confirm Bahrain will host 2025 Pre-Season
            Testing
          </h1>
          <a href="" className="pt-6">
            The circuit has hosted pre-season testing on six separate occasions
            since 2009, with its consistent weather conditions, mixture of high
            and low speed corners, and two long straights enabling the ten
            Formula 1 teams to put their cars through their paces and gather
            maximum data ahead of the season.
          </a>
          <div className="flex flex-row pt-6">
          <h2 className="font-bold text-red-600 pr-6">Sports</h2>
          <h2> . 1 hours ago</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
