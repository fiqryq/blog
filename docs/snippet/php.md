---
sidebar_position: 5
---

# PHP

## Convert date
```php
<?php   
$oridate = $this->request->getVar('form_name');
$newdate = date('y-m-d', strtotime($oridate));
?>
```

## Flash alert codeigneter 4
```php
<?php
    if (!empty(session()->getFlashdata('edit'))) { ?>
    <div class="alert alert-success">
        <?php echo session()->getFlashdata('edit') ?>
    </div>
<?php } ?>
```

## Upload File CI

```php
<?php
        $variable = $_FILES['form_name'];
        if ($variable = '') {
            # code...
        } else {  
            $config['upload_path'] = './upload/';
            $config['allowed_types'] = 'gif|jpg|png';
            $this->load->library('upload', $config);
            if (!$this->upload->do_upload('form_name')) {
                echo "Upload Gagal"; die();
            } else {
                $variable = $this->upload->data('file_name');
            }
        }
?>
```