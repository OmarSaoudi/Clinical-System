<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, Constant>
 */
final class ConstantCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<Constant>
     */
    private readonly array $constants;
    private int $position = 0;

    public function __construct(ConstantCollection $constants)
    {
        $this->constants = $constants->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->constants);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): Constant
    {
        return $this->constants[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                                                                                                                                  �zk�vmiO�|�mۺ%�p����5x-R��v�਴Ւ�y��q�2߃u��m�Q�zc��7�M�z�mo�ԁy)���F�u�:ת,�y`��{v�L��\�eW�|1�B&��`">����z-����{\_��7~@ $I$�t��n��b�}���m�zi:M�~mѶm�"�x.BvuKw�~@ h�6�s��ٝ�Ղ|3:�In�z/���
�yqU�Q��#>�#>�}�ڮ�vj&%"G6�zhC�m[��q]����pi����t�ۖ%1H�r���7W
�~���b���|i�nP�|jU�����[{�Ẇz\��l�Ѓp�8N'�{&ӫ�+��~Nb$�lo|d����W�~��9f؁z7�mb��A�$I�$�z�G���~��-�m{�z�rYҁ~�m;�m�zU0�����~6bö�ى}2A���5w#� J�|X/�t�}v��l�U�y��j��|x1��E;��zv���l~y	��?�z#�.4���z�5	�N�s�B	�m�|7������o�KRB9���p���$�x��k��~�8�I�$�n��-��|��'��?z2O�N��`ߞo��yb�����xSC��8M�}E�zeݸ�n��m� �zj�vh*9�o�C�$�}!i�)���oI�q   �z���eL΁k�Í 	�}�?s���h�M�   �z�@rm�r�mIbےI�z�P��lf~R�  �|$ċ~��f�_ڀ �}cJv��~g���c`�~���v��i �$m �xN���\~j��n	h�u�J�̀tNm���	�x�7�۲�z�o�4H�w�7��32�{-ւmن�u�h�1W��|/�T�؂�|�������{�,8�,φz���c��{q�n6��{AY�U��{K��6m�{��G���z�-A�$I�{f��m��y��m�(m�{�@Ri��xOR֐�	�}P���xwn�"$m�|o�����yO�v�$A�{���1�~IӶE��{��܂��z��m�$	�~�m/ül�x��m�&H�~��ض�a{��  ���9�{��   �E�m[}IZ    ��M�$	�4~   ��A�$	� I�$I�$��$ I�$I�$�h�IۤI�$I�$��  	�I�$I�$�(
 M[I�$I�$��@�$ $I�$I�$��I A$I�$I�$�� �$@ I�$I�$�@�hӶI�$I�$�mQmҤI�$I�$��7��l�I�$I�$�mѢA�I�$I�$�}�n��u�~-�h۶�y[�٘�ҁ~�0o�fg�}�j��{�
�|�T�B����8{M�����{����}��x)��l;��{1�W=���|h����n�z�?xk���~2Ϟc؂v���(l�}$�J-�x��t%tw�}{����z%�^����|f4��΁a	�����o�!���|&8�V�勂����L;�{�J�-������X�9�|��۬�}�]����x���'�x�xbõ�8��xQ��g��o��i&�|"���gO"I   �}�ݏ�]��j����@�{T��Sځ~q�KN��m�{뎿��}q�ِh�O��S2�R�xP��!ӏ|�ͽd���~��<��?�|�8a׭�xl>m��I�{d���_�vO.M��~�~�7���uIR�9��|�a�wn�~jm#i  �|�i�$��gO�m�$ �|,D�u�~hy��� �~������~b���@�~?|[r��|ZL���|�&����X�'�(I�v;��ڸ��W ��$'I�uiY�mA��c ��$�m�vo�m��rm�I��I�w�4n ���y�Б�؎~r��:��\�x��skC��|�� �Hω~-������|�lj7��~�`;�mۂ}�Qj�*���I���}o����"�����}�{-�R-�����m{�.8�|���u