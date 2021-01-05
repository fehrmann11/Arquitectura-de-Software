import React from 'react'
import { Icon, List,Label } from 'semantic-ui-react'

const Categorizador = (props) => {
  
  const handleClick = id => e => {
    const x = props.handleClick
    x(id)
  }

  /*
  categorias:
  alimentos = 1
  confecciones = 2
  tejidos = 3
  cueros = 4
  repostería = 5 
  pintura = 6
  importados = 7
  regalos = 8
  joyas = 9
  artesanía = 10
  ropa = 11
  belleza=12
  boutique = 13
  calzado = 14
  
  */
  return (
    <div className="cate">
      <List horizontal className="cate-div">
        <List.Item onClick={handleClick(0)} className="cate-item">
          <List.Content className="cate-item-content">
                <Label className="cate-item-content-label" color='black' tag>
                    <Icon name='shop' size='large'/>
                    <span>Todas</span>
                </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(1)} className="cate-item">
          <List.Content className="cate-item-content">
                <Label className="cate-item-content-label" color='red' tag>
                      <Icon name='food' size='large'/>
                      <span>Alimentos</span>
                </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(2)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='green' tag>
                        <Icon name='sign language' size='large'/>
                        <span>Confecciones</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(3)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='pink' tag>
                        <Icon name='cut' size='large'/>
                        <span>Tejidos</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(4)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='orange' tag>
                        <Icon name='bug' size='large'/>
                        <span>Cueros</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(5)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='yellow' tag>
                        <Icon name='birthday cake' size='large'/>
                        <span>Repostería</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(6)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='olive' tag>
                        <Icon name='tint' size='large'/>
                        <span>Pintura</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(7)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='teal' tag>
                        <Icon name='shipping fast' size='large'/>
                        <span>Importados</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(8)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='blue' tag>
                        <Icon name='gift' size='large'/>
                        <span>Regalos</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(9)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='violet' tag>
                        <Icon name='diamond' size='large'/>
                        <span>Joyas</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(10)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='purple' tag>
                        <Icon name='asl interpreting' size='large'/>
                        <span>Artesanía</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(11)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='brown' tag>
                        <Icon name='suitcase' size='large'/>
                        <span>Ropa</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(12)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='grey' tag>
                        <Icon name='wizard' size='large'/>
                        <span>Belleza</span>
                  </Label>
          </List.Content>
        </List.Item>
        <List.Item onClick={handleClick(13)} className="cate-item">
          <List.Content className="cate-item-content">
                  <Label className="cate-item-content-label" color='yellow' tag>
                        <Icon name='shopping bag' size='large'/>
                        <span>Boutique</span>
                  </Label>
          </List.Content>
        </List.Item>
      </List>
    </div>
  )
}

export default Categorizador
