function upperNavbar(){
  return ` <div>
  <div class="top_div">
    <p><i class="fa-solid fa-truck-fast"></i>Free Shipping</p>
    <p><i class="fa-solid fa-store"></i>Click & Collect</p>
    <p><i class="fa-solid fa-store"></i>Return To Store</p>
  </div>
  <div class="top_div">
    <p><a href="https://www.lifestylestores.com/in/en/apps">Download Our Apps</a></p>
    <p>|</p>
    <p>Store Locator</p>
    <p>|</p>
    <p>Help</p>
  </div>
</div>`
}

function navbar(){
    return ` <div>
    <ul class="main-list">
      <li id="home-logo"><a href="index.html"><img src="data:image/png;base64,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" alt=""></a></li>
      <li class="nav-list">
        <a href="./ScrachProduct_sharun/women.html">Women</a>
        <div class="sub-list">
          <ul>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Ethinic</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <!--copy end-->
            </li>

            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Estern</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat2-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat2-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat2-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat2-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Lingeri/Sleepwear</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat3-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat3-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat3-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">top Brand</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat4-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat4-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat4-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat4-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Sports</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat5-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat5-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat5-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat5-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Plus Size</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat6-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat6-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Winter</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Size</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat8-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Beauty</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <!-- <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    /> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Foot</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <!-- <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    /> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">Watch</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <!-- <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    /> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">jwelery</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <!-- <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    /> -->
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/women.html">More</a>
              <div class="sub-sub-list">
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Ethnic & Fusion Wear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Kurtas & Kurtis</li>
                        <li>Ethnic Sets</li>
                        <li>Ethnic Dresses</li>
                        <li>Tops & Tunics</li>
                        <li>Leggings</li>
                        <li>Pants & Palazzos</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner1-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner2-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner3-22Nov2021.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Women-Cat1-Banner4-22Nov2021.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-list men">
        <a href="./ScrachProduct_sharun/mens.html./ScrachProduct_sharun/mens.html"> Men</a>
        <div class="sub-list">
          <ul>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Topwear</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div>
              <!-- end -->
            </li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Bottomwear</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Activewear</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Ethnic</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Winterwear</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Innerwear</a>
            
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Top Brands</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Watches</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Sunglasses</a>
            
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Shoes</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">Gromming</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/mens.html">More</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
          </ul>
        </div>
      </li>
      <li class="nav-list kids">
        <a href="./ScrachProduct_sharun/kids.html"> Kids</a>
        <div class="sub-list">
          <ul>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Boys</a> <div class="sub-sub-list">
              <!--copy start-->
              <div class="sub-sub-listContainer">
                <div class="sub-sub-listCategory">
                  <h3>Shop in Topwear</h3>
                  <div class="categoryList1">
                    <ul>
                      <li>Casual Shirts</li>
                      <li>Formal Shirts</li>
                      <li>Polos</li>
                      <li>T-shirt</li>
                      <li>Jackets</li>
                      <li>Hoodies and SwetShirts</li>
                    </ul>
                  </div>
                </div>
                <div class="sub-sub-listImages">
                  <img
                    src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop1-21Sept2020.jpg"
                    alt=""
                  />
                  <img
                    src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop2-21Sept2020.jpg"
                    alt=""
                  />
                  <img
                    src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Mens-Teesandtops-Desktop3-21Sept2020.jpg"
                    alt=""
                  />
                 
                </div>
              </div>
            </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Girls</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div> </li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Top Brands</a>
            
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Accessories</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Price Point Store</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Age Store</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Boys FootWear</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Girls Footwear</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Charater Shop</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">Offer</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/kids.html">More</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-BoysClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-GirlsClothing-Banner4-09Feb2022.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Kids-Agestore-Banner3-09Feb2022.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
          </ul>
        </div>
      </li>
      <li class="nav-list shoes">
        <a href="./ScrachProduct_sharun/Shoes_bags.html"> Shoes and Bags</a>
        <div class="sub-list">
          <ul>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">Women</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">Men</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">Boys</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">Girls</a><div class="sub-sub-list">
              <!--copy start-->
              <div class="sub-sub-listContainer">
                <div class="sub-sub-listCategory">
                  <h3>Shop in Topwear</h3>
                  <div class="categoryList1">
                    <ul>
                      <li>Casual Shirts</li>
                      <li>Formal Shirts</li>
                      <li>Polos</li>
                      <li>T-shirt</li>
                      <li>Jackets</li>
                      <li>Hoodies and SwetShirts</li>
                    </ul>
                  </div>
                </div>
                <div class="sub-sub-listImages">
                  <img
                    src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                    alt=""
                  />
                  <img
                    src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                    alt=""
                  />
                  <img
                    src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                    alt=""
                  />
                 
                </div>
              </div>
            </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">WomenAccessories</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">Essentials</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">Price Store</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Shoes_bags.html">More</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop in Topwear</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Casual Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Polos</li>
                        <li>T-shirt</li>
                        <li>Jackets</li>
                        <li>Hoodies and SwetShirts</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Mens-Desktop3-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Women-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                    <img
                      src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Flyout-Shoeandbags-Access-Desktop1-21Sept2020.jpg"
                      alt=""
                    />
                   
                  </div>
                </div>
              </div></li>
          </ul>
        </div>
      </li>
      <li class="nav-list beauty">
        <a href="./ScrachProduct_sharun/Beauty.html"> Beauty</a>
        <div class="sub-list">
          <ul>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Beauty.html">Lips</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Beauty.html">Face</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Beauty.html">Eyes</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Beauty.html">Nails</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Beauty.html">Skin Care</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Beauty.html">Bath & Body</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="./ScrachProduct_sharun/Beauty.html">Fragrance</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types">
              <a href="./ScrachProduct_sharun/Beauty.html">Tools & Accessories</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-list-types"><a href="">Men Grooming</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="">Essentials</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
            <li class="nav-list-types"><a href="">More</a>
              <div class="sub-sub-list">
                <!--copy start-->
                <div class="sub-sub-listContainer">
                  <div class="sub-sub-listCategory">
                    <h3>Shop BeautiProduct</h3>
                    <div class="categoryList1">
                      <ul>
                        <li>Lipstick</li>
                        <li>Lip liner</li>
                        <li>Lip glos</li>
                        <li>Eye liner</li>
                        <li>Mascara</li>
                        <li>Cream</li>
                      </ul>
                    </div>
                  </div>
                  <div class="sub-sub-listImages">

                   
                  </div>
                </div>
              </div></li>
          </ul>
        </div>
      </li>
      <li>
        <input
          type="search"
          placeholder="What are you looking for"
          id="search"
        />
      </li >
      <li id="login" >SignUp-SignIn</li>
      <a href="bucket_res/bucket.html">Bucket</a>
    </ul>
  </div>
  `;
}

function footer(){
    return `  <div id="top-foot">
    <div>
      <h2>Subscribe to our awesome emails.</h2>
      <p>Get our latest offers and news straight in your inbox.</p>
    </div>
    <div>
      <h2>Download our apps</h2>
      <p>Shop our products and offers on-the-go.</p>
    </div>
    <div class="box1">
      <div>
        <input type="search" placeholder="Please enter an mail address" />
      </div>
      <div><button>Subscribe</button></div>
    </div>
    <div class="box1">
      <div>
        <a href="https://itunes.apple.com/in/app/id1180884618?ls=1&mt=8"
          ><img
            src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg"
            alt="apple logo"
        /></a>
      </div>
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=com.applications.lifestyle"
          ><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3_79Zkuhf1oKgJicKCIog14Ajc09dYXv7Q&usqp=CAU"
            alt=""
        /></a>
      </div>
    </div>
  </div>
  <!-- line -->
  <div id="bottomdiv">
    <div class="bottomsec">
      <h3>Women</h3>
      <p>Tops</p>
      <p>Ethnicwear</p>
      <p>Dresses & Jumpsuits</p>
      <p>Winterwear</p>
      <p>Lingerie</p>
      <p>Nightwear</p>
      <p>Sportswear</p>
      <p>Beauty</p>
      <p>Watches & Sunglasses</p>
    </div>
    <div class="bottomsec">
      <h3>Men</h3>
      <p>Tops</p>
      <p>Bottoms</p>
      <p>Ethnicwear</p>
      <p>Winterwear</p>
      <p>Sportswear</p>
      <p>Innerwear</p>
      <p>Grooming</p>
      <p>Watches</p>

      <p>Sunglasses</p>
    </div>
    <div class="bottomsec">
      <h3>Kids</h3>
      <p>Girls Clothing</p>
      <p>Boys Clothing</p>
      <p>Infants Girls</p>
      <p>Infants Boys</p>
      <p>Winterwear</p>
      <p>Add ons</p>
      <p>The Teen Shop</p>
    </div>
    <div class="bottomsec">
      <h3>Shoes & Bags</h3>
      <p>Women</p>
      <p>Men</p>
      <p>Boys</p>
      <p>Girls</p>
      <p>Accesssories</p>
      <p>Men</p>
      <p>Essentials</p>
    </div>
    <div class="bottomsec">
      <h3>Beauty</h3>
      <p>Women</p>
      <p>Men</p>
      <p>Boys</p>
      <p>Makeup</p>
      <p>Face</p>
      <p>Lips</p>
      <p>Nails</p>
      <p>Perfumes</p>
    </div>
    <div class="bottomsec">
      <h3>Explore</h3>
      <p>Online</p>
      <p>Offers</p>
      <p>Store Offers</p>
      <p>Online Gifts</p>
      <p>Card</p>
      <p>Store Gift</p>
      <p>Nearby</p>
      <p>EDGE</p>
      <p>Membership</p>
      <p>Shop on</p>
      <p>WhatsAap</p>
      <p>Fashion</p>
      <p>Vlog</p>
      <p>Join</p>
      <p>CIRCLEMAG</p>
      <p>SBI Offers</p>
      <p>Homecentre</p>
    </div>
    <div class="bottomsec">
      <h3>About</h3>
      <p>About Us</p>
      <p>Careers</p>
      <p>Take a Tour</p>
      <p>Blog</p>
      <p>Store</p>
      <p>locator</p>
      <p>Landmark</p>
      <p>Careers</p>
    </div>
    <div class="bottomsec">
      <h3>Help</h3>
      <p>Contact Us</p>
      <p>Shipping</p>
      <p>Returns</p>
      <p>Process</p>
      <p>Returns</p>
      <p>policy</p>
      <p>Help Center</p>
    </div>
  </div>
  <div class="last-div">
    <div class="contact">
      <div class="contactUs">
        <img src="./resource/call.jpeg" alt="" />
        <div class="contactPara">
          <p>Talk to us</p>
          <p>1800-123-1555</p>
        </div>
      </div>
      <div class="contactUs">
        <img src="./resource/mail.jpeg" alt="" />
        <div class="contactPara">
          <p>Helpcenter</p>
          <p>help@lifestyle.com</p>
        </div>
      </div>
      <div class="contactUs">
        <img src="./resource/ask.jpeg" alt="" />
        <div class="contactPara">
          <p>Write Us</p>
          <p>help@lifestyle.com</p>
        </div>
      </div>
    </div>
    <div class="socialHandel">
      <a href="https://www.facebook.com/lifestylestores"
        ><i class="fa-brands fa-facebook-f"></i
      ></a>
      <a href="https://www.twitter.com/Lifestyle_Store"
        ><i class="fa-brands fa-twitter"></i
      ></a>
      <a href="https://www.instagram.com/lifestylestores"
        ><i class="fa-brands fa-instagram"></i
      ></a>
    </div>
  </div>
  <div class="last-div">
    <div class="copyRight">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABVCAMAAABEg4uFAAAAw1BMVEX///8AAADa2tqTk5MLCwtCQkK2trakpKRubm709PTw8PDh4eHQ0NCDg4PNzc1eXl6rq6vuTJvExMQxMTF2dna+vr6ZmZkYGBg5OTlJSUlpaWkgICDo6OgpKSlSUlISEhL8pgD6pBnwO5aLi4v+9Of/893+uEb9vl3/+fH92Oj7j8L5hLnscy77s9TnN3bXBxbdNCf96/PZFSnmXiT8wt3sR5D9sznpQHTcJRb8rSXsOovvh5L/6MD5brL/9v38qM/1msUFm769AAADj0lEQVRoge2W2WKiMBSGEzUoi+xQQASXdjp7l+ksnf39n2pOTgKCgtrO6Nzkv2hNyMlHzhYIUVJSUlJSUlJSUlL6O11e/g/q1YvF4vrlmaGvXr95u1wuF9fnxb5bee9vbjn46kxExylMcud5wL3/8IhcXZs4oWs8azszdZyjFlJKB+Rh5Xkfb+5vH5efCLEvKFf+LO4ALJ/G9T7ffFk8XqHlRRqE+83MdS93dDyX+9nzvn77Duk8pzTUwdn7jPKi71RP48KBV97qx08Y+5QmB43sXm8+kUvufv1+wPGa0vigkfXPuLVCSv3zcQcBYyzwzYDNKOW/eRVBPbEkDTUZanNdJGwyNonFGFgVacpCnxWTeittnjhmzdXdrGndw8XS0UxaCbj+XP4O0AFu9Si26lUFaRYcJJtbc6NArknsfdwkLSmNBvWOOdHw/0y8kEglmqTwJ7Ib3HCTDgZM6JWf8S2TAs2jfi6I8e1zI4ONjDxHTmYSeeycwPyMn8ydGc3uAMtmcidAZVV8oSpoyGNlpj0tqM0lZELpWA5la9DhpUOSynks7EZeJXUeMn4ywdVhdkjq6enx3AjCWi3R+JkKDq/U4MbVfA6rdMmNGk0APFIez4W4udUSnefZWIR5hwu4EV4hYzyX4E4a1gTc1ZHTPVwYZVOpcESpyR1KU3+HSxzJgEBYFRfWwr0khdZHcvUZbSsnRoE1FW1zIYVSgsCASO6Odced2sOFlwyHDfEVGpZkpm/1qxJ3iEUmIdcoO6yP484722XEnZ1tcdeY+anwZn3e7m5xiLspmy1luL7FzfkAeIyQRnzdLuvD3GnfdVjyBtW+FyDwfixJghuKmO/TqHJJm2s1y6YpxrmDVq5AfWdMFgt/omOz6+yOrX2KDi4vj5GMsM9PYjjoFl7LLv7d3NIGpm9GqudDdEEpraNuj0NWUBbrO1ze5amj2fa4oKMcWxCMtESclId56tuxaKVho/szNEPrTFhfdH6Z6njbmTtcYlQXGZ6QJ9pmQHLxzSlzgAdlJnvSQEwb8411Z7yIMSmRG4gFWZ3I+lDYzkPuYWsimgET7jOxi9AAaeLmkLIK7CD6umndqdyOwFxzXV6AdqTVXU23osgfVM3VsHwY1Vb4TLowadWr6fvC2m9Yn0TJEd+gJ5C7uW3PqHza80lxUsWY9p099aSa9lfKabll4Z40Z5WUlJSUlJSUlJSUzqw/TYgygrg/dx0AAAAASUVORK5CYII="
          alt=""
        />
      </div>
      <div>
        <p>&#169;2022 RNA Intellectual Property Limited.</p>
        <p>Terms & Conditions - Privacy Policy</p>
      </div>
    </div>
  </div>`
}





export {upperNavbar,navbar,footer};
// export default footer;
// {navbar,footer};